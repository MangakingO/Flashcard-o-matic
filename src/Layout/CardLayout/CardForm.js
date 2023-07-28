import React, { useState } from "react"

function CardForm({ submitFunction, cancelFunction, data = { "front": "", "back": "" } }) {
    const [formData, setFormData] = useState(data)

    function updateData(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        submitFunction(formData);
    }

    function cancelHandler(event) {
        event.preventDefault()
        cancelFunction()
    }

    return (
        <form onSubmit={submitHandler}>
            <label className="d-block mb-3" htmlFor="front">
                <span className="d-block">Front</span>
                <textarea className="w-100" name="front" onChange={updateData} value={formData.front} required type="text" placeholder="Front side of card" />
            </label>

            <label className="d-block mb-3" htmlFor="back">
                <span className="d-block">Back</span>
                <textarea className="w-100" name="back" onChange={updateData} value={formData.back} required type="text" placeholder="Back Side of Card" />
            </label>

            <button onClick={cancelHandler} className="btn btn-secondary mr-3">Cancel</button>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
}

export default CardForm