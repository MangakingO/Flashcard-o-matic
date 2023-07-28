import React from "react";

import DeckPreview from "./DeckPreview"

/**
 * Deck list preview component
 * @param {object} paramList 
 * List of parameters
 * 
 * @param {Array} paramList.deckList 
 * List of available decks
 * 
 * @param {function} paramList.deleteFunction
 * Function to call when deleting a list
 * 
 * @returns div element with list of Deck Preview components
 */
function DeckListPreview({ deckList = [], deleteFunction }) {

    if (!deckList.length) return "Loading.."

    const preview = deckList.map((deck, index) => {
        return <DeckPreview key={index} deck={deck} deleteFunction={deleteFunction} />
    });

    return (
        <div className="deck-list">
            {preview}
        </div>
    )
}

export default DeckListPreview;
