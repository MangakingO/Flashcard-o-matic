import React from "react"
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom"
import { createDeck } from "../../utils/api"

import { requestCardDelete, requestDeckDelete } from "../Common/Functions"

import NotFound from "../NotFound"
import CreateDeck from "./CreateDeck"
import Deck from "./Deck"

/** Wrapper component for deck layout */
function DeckLayout() {
    const history = useHistory()
    const route = useRouteMatch()

    const GoToDeck = (id) => history.push(`${route.url}/${id}`)
    const Home = () => history.push(`/`)

    /**
     * Creates a deck and redirects to that DeckDisplay component
     */
    const create = (deck) => {
        const abortController = new AbortController()

        return createDeck(deck, abortController.signal)
            .then(({ id }) => GoToDeck(id))
            .catch((error) => { if (error.name !== "AbortError") throw error; })
            .finally(() => abortController.abort)
    }

    /** Deletes Deck and redirects to a given page */
    const deleteDeck = (deckid, to) => {
        return requestDeckDelete(deckid)
            .then((response) => { if (response !== undefined) history.push(to) })
    }

    return (
        <Switch>

            <Route path={`${route.url}/new`}>
                <CreateDeck createFunction={create} cancelFunction={Home} />
            </Route>

            <Route path={`${route.url}/:deckid`}>
                <Deck deleteCardFunction={requestCardDelete} deleteFunction={deleteDeck} cancelFunction={GoToDeck} homeFunction={Home} />
            </Route>

            <Route>
                <NotFound />
            </Route>

        </Switch>
    )
}

export default DeckLayout