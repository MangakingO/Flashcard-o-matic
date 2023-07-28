import React from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom"
import { createCard, updateCard } from "../../utils/api"
import NotFound from "../NotFound"
import Card from "./Card"

import CreateCard from "./CreateCard"

function CardLayout({ deck, returnToDeck, deckRefreshMethod }) {

    const { url } = useRouteMatch()

    function refresh() {
        deckRefreshMethod()
        returnToDeck()
    }

    async function create(card) {
        const abortController = new AbortController()

        try {
            await createCard(deck.id, card, abortController.signal)
            refresh()
        } catch (error) {
            if (error.name !== "AbortError") throw error
        }

        return () => { abortController.abort() }
    }

    async function update(card) {

        const abortController = new AbortController()

        try {
            await updateCard(card, abortController.signal)
            refresh()
        } catch (error) {
            console.log("error!", error)
            if (error.name !== "AbortError") throw error
        }

        return () => { abortController.abort() }
    }

    return (
        <Switch>
            <Route path={`${url}/new`}>
                <CreateCard deck={deck} createFunction={create} cancelFunction={returnToDeck} />
            </Route>

            <Route path={`${url}/:cardid`}>
                <Card updateCardMethod={update} returnToDeckFunction={returnToDeck} deck={deck} />
            </Route>

            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default CardLayout