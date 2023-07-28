import React from "react"

import ContentLayer from "../Common/Content"
import Heading from "../Common/Heading"

import DeckForm from "./DeckForm"

/**
 * 
 * @param {object} paramList
 * 
 * @param {function} paramList.updateFunction
 * function called when updating deck
 * 
 * @param {function} paramList.returnToViewFunction
 * Function used to return to the deck view
 * 
 * @param {object} paramList.deck
 * The current deck information
 * 
 * @returns "Loading" if deck hasn't loaded yet, a form otherwise
 */
function DeckEdit({ updateFunction, returnToViewFunction, deck }) {

    function submitHandler(result) {
        updateFunction(result)
        returnToViewFunction()
    }

    if (!Object.keys(deck).length) return "Loading..." //don't load the form until the deck is loaded

    return (
        <ContentLayer>
            <Heading title={"Edit Deck"} />
            <DeckForm data={deck} submitFunction={submitHandler} cancelFunction={returnToViewFunction} />
        </ContentLayer>

    )
}

export default DeckEdit