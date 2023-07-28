import React from "react"
import { AddCards } from "../Common/Buttons";

function NotEnoughCards({ cards = [], addCardLink = "/" }) {
    return (
        <div>
            <h2>Not enough cards.</h2>
            <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
            <AddCards to={addCardLink} />
        </div>
    )
}

export default NotEnoughCards