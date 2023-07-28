import React, { useState, useEffect } from "react"

/**
 * A study card block used for the study session
 * 
 * @param {object} params
 * The list of parameters
 * 
 * @param {object} [params.card]
 * The card to turn into a study card
 * 
 * @param {int} params.cardIndex
 * The current index of the card for viewing
 * @param {int} params.cardTotal
 * The total number of cards in the deck
 * 
 * @param {function} params.nextFunction
 * The function used to go to the next card when Next is clicked
 * @param {function} params.restartFunction
 * The function used to restart the deck if at the final card and prompt is confirmed
 *
 * @param {function} params.endSessionFunction
 * The function used to end the session if the card is the final card and prompt is cancelled
 * 
 * @returns A wrapper of the card to use to study
 */
function StudyCard({ card = {}, nextFunction, cardIndex, cardTotal, restartFunction, endSessionFunction }) {
    const { front, back } = card;
    const [checkBack, setBackView] = useState(false)

    const flip = () => setBackView(!checkBack)

    useEffect(() => { setBackView(false) }, [card, cardIndex]) //flip to front when card or card index is updated.

    function nextCardHandler() {
        if (cardIndex < cardTotal) return nextFunction()

        if (window.confirm("Restart cards?\n\nClick 'cancel' to return to the home page.")) restartFunction()
        else endSessionFunction()
    }

    return (
        <div className="card p-3">
            <h4>Card {cardIndex} of {cardTotal}</h4>
            <p>{checkBack ? back : front}</p>
            <div>
                <button onClick={flip} className="btn btn-secondary mr-2">Flip</button>
                {checkBack ?
                    <button onClick={nextCardHandler} className="btn btn-primary">Next</button> : // show next button only when it's on the back
                    null
                }
            </div>
        </div>
    )
}

export default StudyCard