import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import { FavoritesProvider } from "./context/FavoritesContext";
import ProyectoDestacado from "./components/proyectoDestacado";

const App = () => {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/proyectoDestacado/:id" element={<ProyectoDestacado />} />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
};

export default App;
