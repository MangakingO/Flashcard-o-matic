import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { readCard, readDeck, updateCard } from '../../utils/api';
import CardForm from '../Form';

function CardEdit({ title }) {
  const history = useHistory();
  const { deckId, cardId } = useParams();

  const [card, setCard] = useState({ front: '', back: '' });
  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
    readCard(cardId).then(setCard);
  }, [deckId, cardId]);

  function submitHandler(card) {
    updateCard(card).then(doneHandler);
  }

  function doneHandler() {
    history.push(`/decks/${deck.id}`);
  }

  const child = card.id ? (
    <CardForm
      onSubmit={submitHandler}
      onDone={doneHandler}
      deckName={deck.name}
      initialState={card}
      doneButtonLabel="Cancel"
    />
  ) : (
    <p>Loading...</p>
  );
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>Deck {deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h2>Edit Card</h2>
      {child}
    </>
  );
}

export default CardEdit;
