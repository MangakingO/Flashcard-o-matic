import React from "react";
import ContentLayer from "../Common/Content";
import Heading from "../Common/Heading";
import CardForm from "./CardForm"

function EditCard({ updateFunction, cancelFunction, card }) {

    if (!Object.keys(card).length) return "Loading..." //don't load the form until the card is loaded

    return (
        <ContentLayer>
            <Heading title={`Edit Card ${card.id}`} />
            <CardForm data={card} submitFunction={updateFunction} cancelFunction={cancelFunction} />
        </ContentLayer>
    );
}

export default EditCard;