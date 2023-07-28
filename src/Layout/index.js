import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./HomeLayout"
import DeckLayout from "./DeckLayout";
import Footer from "./Footer"

function Layout() {
  return (
    <div className="content d-flex flex-column justify-content-between">
      <div>
        <Header />
        <div className="container">
          <Switch>

            <Route path="/decks">
              <DeckLayout />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route>
              <NotFound />
            </Route>

          </Switch>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Layout;
