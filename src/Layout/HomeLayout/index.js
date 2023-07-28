import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import { listDecks } from "../../utils/api"

import { requestDeckDelete } from "../Common/Functions"
import ContentLayer from "../Common/Content";

import DeckPreview from "./DeckPreview";

/** Home Page. */
function Home() {

    const [deckList, setDecks] = useState([])

    useEffect(() => {
        const abortC = new AbortController()

        listDecks(abortC.signal)
            .then(setDecks)
            .catch((error) => {
                if (error.name !== "AbortError")
                    throw error
            })

        return () => abortC.abort()
    }, []) // load decks when the page is loaded 

    const deleteDeck = async (deckId) => {
        const response = await requestDeckDelete(deckId)

        if (response === undefined) return

        const deckListTemp = deckList.filter((deckItem) => deckItem.id !== deckId)
        setDecks(deckListTemp)

        return response;
    }

    return (
        <ContentLayer>
            <Link to="/decks/new" className="btn btn-secondary bi-plus-lg"> Create Deck</Link>
            {deckList.length
                ? deckList.map((deck) => <DeckPreview key={deck.id} deck={deck} deleteFunction={deleteDeck} />)
                : "Loading..."}

        </ContentLayer>
    )
}

export default Home;