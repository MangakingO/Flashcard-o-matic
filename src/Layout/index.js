import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Study from '../Deck/Study';
import NotFound from './NotFound';
import Header from './Header';
import DeckEdit from '../Deck/Edit';
import DeckView from '../Deck/View';
import CardEdit from '../Card/Edit';
import CardCreate from '../Card/Create';
import DeckCreate from '../Deck/Create';

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route exact={true} path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
