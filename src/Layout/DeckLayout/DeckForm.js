import React, { useState } from "react"

/**
 * 
 * @param {object} paramList
 * 
 * @param {function} paramList.submitFunction
 * The function used when submitting a deck
 * 
 * @param {function} paramList.cancelFunction
 * The function used when cancelling the form
 * 
 * @param {object} [paramList.data]
 * The initial data faor the deck. Leave blank if starting fresh 
 * 
 * @returns a deck form for creating or editing decks
 */
function DeckForm({ submitFunction, cancelFunction, data = { "name": "", "description": "" } }) {
    const [formData, setFormData] = useState(data)

    function updateData(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function submitHandler(event) {
        event.preventDefault()
        submitFunction(formData)
    }

    function cancelHandler(event) {
        event.preventDefault()
        cancelFunction()
    }

    return (
        <form onSubmit={submitHandler}>
            <label className="d-block mb-3" htmlFor="name">
                <span className="d-block">Name</span>
                <input className="w-100" name="name" type="text" onChange={updateData} value={formData.name} required placeholder="Deck Name" />
            </label>

            <label className="d-block mb-3" htmlFor="description">
                <span className="d-block">Description</span>
                <textarea className="w-100" name="description" onChange={updateData} value={formData.description} type="text" placeholder="Brief description of the deck" />
            </label>

            <button onClick={cancelHandler} className="btn btn-secondary mr-3">Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default DeckForm