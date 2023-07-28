import React from "react"
import { Edit, Delete } from "../Common/Buttons"

function CardDisplay({ card = {}, routeBase = "", deleteFunction }) {

    function deleteHandler() {
        if (!card.id) return

        deleteFunction(card.id)
    }


    return (
        <div className="p-2 border">
            <div className="d-flex justify-content-between">
                <p className="text-secondary col-6">{card.front}</p>
                <p className="text-secondary col-6">{card.back}</p>
            </div>
            <div className="d-flex justify-content-end p-2">
                <Edit to={routeBase === "" ? "/" : `${routeBase}/cards/${card.id}/edit`} className="m-2" />
                <Delete deleteFunction={deleteHandler} className="m-2" />
            </div>
        </div>
    )
}

export default CardDisplay;