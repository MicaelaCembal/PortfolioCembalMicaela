import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import { FavoritesProvider } from "./context/FavoritesContext";
import ProyectoDestacado from "./components/proyectoDestacado";
import { ProyectoProvider } from "./context/ProyectosContext";

const App = () => {
  return (
    <BrowserRouter>
      <FavoritesProvider>
      <ProyectoProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/proyectoDestacado/:id" element={<ProyectoDestacado />} />
        </Routes>
        </ProyectoProvider>
      </FavoritesProvider>
    </BrowserRouter>
  );
};

export default App;


{/*FALTA HACER LIDNO DETALLE PROYECTO DESTACADO  */}