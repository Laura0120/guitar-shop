import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import { redirect } from "./js/store/redirect";
import combineReducers from "./js/store/reducers/root-reducer";
import App from "./js/components/app";

require("./scss/style.scss");

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(redirect))
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
