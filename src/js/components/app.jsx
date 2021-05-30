import React from "react";
import { Switch, Route, Router as BrowserRouter } from "react-router-dom";

import browserHistory from "../browser-history";
import CatalogPage from "./catalog-page";
import CartPage from "./cart-page";
import { AppRoute } from "../const";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.CATALOG.url}>
          <CatalogPage />
        </Route>
        <Route exact path={AppRoute.CART.url}>
          <CartPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
