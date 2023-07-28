import React from "react";
import ContentLayer from "../Common/Content";
import Heading from "../Common/Heading";

import CardForm from "./CardForm"

function CreateCard({ createFunction, cancelFunction, deck }) {

    function submitHandler(card) {
        createFunction({
            ...card,
            "deckId": deck.id
        })
    }
    return (
        <ContentLayer>
            <Heading title={`${deck.name}: Add Card`} />
            <CardForm submitFunction={submitHandler} cancelFunction={cancelFunction} />
        </ContentLayer>
    );
}

export default CreateCard;