import React, { useEffect, useState } from "react"

import ContentLayer from "../Common/Content"
import Heading from "../Common/Heading"

import NotEnoughCards from "./NotEnoughCards"
import RandomButton from "./RandomButton"
import StudyCard from "./StudyCard"

function StudyLayout({ deck, addCardLink = "/", endStudyFunction }) {

    /** @typedef {Object} cards - The list of cards in the study session */
    const { cards } = deck // cards used in the study session
    const [index, setIndex] = useState(0)
    const [shuffle, setShuffle] = useState(false)

    /** @typedef {Array} reference - the list of references indecies for cards */
    const [reference, setReference] = useState([])

    const getCard = () => cards[reference[index]] //returns the card based on the reference index

    const validCardLength = () => cards && cards.length > 2 // check if the card is of a valid length

    const restart = () => {
        shuffleCards()
        setIndex(0)
    }
    const nextCard = () => {
        if (index >= cards.length - 1) return false

        setIndex(index + 1)
        return true
    }

    const orderedIndexList = () => cards.map((ignored, index) => index) //gets the correct order of indicies of cards

    const shuffleIndexList = () => {
        const numbers = orderedIndexList() // gets the array of indicies of cards

        const randomize = (index) => Math.floor(Math.random() * index) // choose a random card 

        for (let currentIndex = numbers.length - 1; currentIndex > 0; --currentIndex) { //iterate currentIndex down the list from the top of the list to the bottom
            const randomIndex = randomize(currentIndex)

            // swap current index and random index
            let temp = numbers[currentIndex]
            numbers[currentIndex] = numbers[randomIndex]
            numbers[randomIndex] = temp
        }

        return numbers
    }

    const shuffleCards = () => {
        if (!validCardLength()) return //don't shuffle cards if there's not enough cards
        setReference(shuffle ? shuffleIndexList() : orderedIndexList())
    }

    const toggleShuffle = () => {
        if (!window.confirm(`Are you sure you want to ${shuffle ? "stop shuffling" : "shuffle"} the deck?\n\nThis will restart the study session.`)) return

        setShuffle(!shuffle)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(restart, [shuffle, cards])

    if (Object.keys(deck).length === 0) return "Loading Deck..."


    return (
        <ContentLayer>
            <Heading title={`Study: ${deck.name}`} />
            {
                validCardLength() ?
                    (
                        <div className="study">
                            <RandomButton className="mb-2" shuffleFunction={toggleShuffle} shuffled={shuffle} />
                            <StudyCard card={getCard()} nextFunction={nextCard} cardIndex={index + 1} cardTotal={cards.length} endSessionFunction={endStudyFunction} restartFunction={restart} />
                        </div>
                    ) :
                    <NotEnoughCards cards={cards} addCardLink={addCardLink} />
            }
        </ContentLayer>
    )
}



export default StudyLayout