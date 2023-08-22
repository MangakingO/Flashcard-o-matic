import React from 'react';
import { Link } from 'react-router-dom';

function CardList({ deck, onCardDelete }) {
  const { cards = [] } = deck;

  const list = cards.map((card) => (
    <li
      key={card.id}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="row">
        <div className="col-md-10">
          <div className="row">
            <div className="col">{card.front}</div>
            <div className="col">{card.back}</div>
          </div>
        </div>
        <div className="col text-right">
          <Link
            to={`/decks/${deck.id}/cards/${card.id}/edit`}
            className="btn btn-secondary mr-2"
            title="Edit Card"
          >
            <span className="oi oi-pencil" /> Edit
          </Link>
          <button className="btn btn-danger m-1" title="Delete Card">
            <span
              className="oi oi-trash p-1"
              onClick={() => onCardDelete(card.id)}
            />
          </button>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="mt-4 card-list">
      <h3>Cards</h3>
      <ul className="list-group">{list}</ul>
    </div>
  );
}

export default CardList;
