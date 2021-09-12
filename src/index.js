import React from "react";
import ReactDOM from "react-dom";
import { firebase } from './lib/firebase.prod';

import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firebase";

import { App } from "./app";
// import { seedDatabase } from './seed';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
