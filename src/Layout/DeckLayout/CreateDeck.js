import React from "react";

import DeckNav from "./DeckNav"
import DeckForm from "./DeckForm"
import ContentLayer from "../Common/Content";
import Heading from "../Common/Heading";

function CreateDeck({ createFunction, cancelFunction }) {

    const nav = <DeckNav deck="Create New" />

    return (
        <ContentLayer nav={nav}>
            <Heading title="Create Deck" />
            <DeckForm submitFunction={createFunction} cancelFunction={cancelFunction} />
        </ContentLayer>
    );
}

export default CreateDeck;