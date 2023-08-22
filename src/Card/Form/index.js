import React, { useState } from 'react';

function CardForm({
  onSubmit,
  onDone,
  deckName = 'Loading...',
  initialState,
  doneButtonLabel = 'Done',
}) {
  const [card, setCard] = useState(initialState);

  function changeHandler({ target: { name, value } }) {
    setCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit({ ...card });
    setCard({ front: '', back: '' });
  }

  return (
    <form onSubmit={submitHandler} className="card-form">
      <fieldset>
        <legend>{deckName}: Add Card</legend>

        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            id="front"
            name="front"
            tabIndex="1"
            className="form-control"
            required={true}
            placeholder="Enter text to display on the front of the card"
            value={card.front}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="back">Back</label>
          <textarea
            id="back"
            name="back"
            tabIndex="2"
            className="form-control"
            required={true}
            placeholder="Enter text to display on the back of the card"
            value={card.back}
            onChange={changeHandler}
          />
        </div>

        <button
          className="btn btn-secondary mr-2"
          onClick={onDone}
          tabIndex="4"
        >
          {doneButtonLabel}
        </button>
        <button type="submit" className="btn btn-primary" tabIndex="3">
          Save
        </button>
      </fieldset>
    </form>
  );
}

export default CardForm;
