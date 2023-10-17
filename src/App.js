import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PageProyectos from "./pages/PageProyectos";
import Experiencia from "./pages/Experiencia";
import Resumen from "./pages/Resumen";
import Contacto from "./pages/Contacto";
import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/proyectos" element={<Layout><PageProyectos /></Layout>} />
          <Route path="/experiencia" element={<Layout><Experiencia /></Layout>} />
          <Route path="/resumen" element={<Layout><Resumen /></Layout>} />
          <Route path="/contacto" element={<Layout><Contacto /></Layout>} />
          <Route path="/favoritos" element={<Layout><Favoritos /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
