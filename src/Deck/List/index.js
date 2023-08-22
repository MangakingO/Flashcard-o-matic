import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteDeck, listDecks } from '../../utils/api';

function DeckList() {
  const [decks, setDecks] = useState([]);

  useEffect(loadDecks, []);

  function deleteHandler(deckId) {
    const confirmed = window.confirm(
      'Delete this deck?\n\nYou will not be able to recover it.'
    );
    if (confirmed) {
      deleteDeck(deckId).then(loadDecks);
    }
  }

  function loadDecks() {
    listDecks().then(setDecks);
  }

  const list = decks.map((deck) => (
    <li
      key={deck.id}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{deck.name}</h5>
        <small>{deck.cards.length} cards</small>
      </div>
      <p className="mb-1">{deck.description}</p>
      <Link
        to={`/decks/${deck.id}`}
        className="btn btn-secondary mr-2"
        title="Edit deck"
      >
        <span className="oi oi-eye" /> View
      </Link>
      <Link
        to={`/decks/${deck.id}/study`}
        className="btn btn-primary"
        title="Study deck"
      >
        <span className="oi oi-book" /> Study
      </Link>
      <button
        className="btn btn-danger float-right"
        title="Delete deck"
        onClick={() => deleteHandler(deck.id)}
      >
        <span className="oi oi-trash p-1" />
      </button>
    </li>
  ));

  return (
    <>
      <Link to="/decks/new" className="btn btn-secondary">
        <span className="oi oi-plus" /> Create Deck
      </Link>
      <ul className="list-group mt-2 deck-list">{list}</ul>
    </>
  );
}

export default DeckList;
