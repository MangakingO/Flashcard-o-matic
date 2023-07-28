import React from "react"

import { View, Study, Delete } from "../Common/Buttons"

/**
 * Preview, and edit a deck
 * @param {object} paramList 
 * List of parameters
 * 
 * @param {object} paramList.deck 
 * The deck to view
 * 
 * @param {function} paramList.deleteFunction
 * Function to call when deleting the list
 * 
 * @returns div with the Deck's name, description, and options
 */
function DeckPreview({ deck = {}, deleteFunction }) {

    return (
        <div className="deck-preview card p-2 mt-2">
            <div className="d-flex justify-content-between">
                <h3 className="large">{deck.name}</h3>
                <p>{deck.cards.length} {`card${deck.cards.length === 1 ? "" : "s"}`}</p>
            </div>

            <p>{deck.description}</p>
            <div className="d-flex justify-content-between">
                <div>
                    <View to={`/decks/${deck.id}`} className={"mr-2"} />
                    <Study to={`/decks/${deck.id}/study`} type="button" className="mr-2" />
                </div>
                <Delete deleteFunction={deleteFunction} to="/index.html" id={deck.id} />
            </div>
        </div>
    )
}

export default DeckPreview