import React, { useState, useEffect } from "react"
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom"
import { readCard } from "../../utils/api";
import NotFound from "../NotFound";
import EditCard from "./EditCard";

function Card({ updateCardMethod, returnToDeckFunction }) {
    const [card, setCard] = useState({})
    const { url } = useRouteMatch();
    const { cardid } = useParams();

    useEffect(() => {
        setCard({})
        async function loadCard() {
            try {
                if (cardid !== undefined) {
                    const response = await readCard(cardid)
                    setCard(response)
                }
            } catch (functionError) {
                if (functionError.name !== "AbortError")
                    throw functionError
            }
        }
        loadCard();
    }, [cardid])

    return (
        <Switch>
            <Route path={`${url}/edit`}>
                <EditCard updateFunction={updateCardMethod} cancelFunction={returnToDeckFunction} card={card} />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Card;