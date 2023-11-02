import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import { FavoritesProvider } from "./context/FavoritesContext";

const App = () => {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Main />
      </FavoritesProvider>
    </BrowserRouter>
  );
};

export default App;
