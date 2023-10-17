import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ProyectosDestacados() {
  const [proyectos, setProyectos] = useState(Array(6).fill(false));

  const toggleFavorito = (index) => {
    const nuevosProyectos = [...proyectos];
    nuevosProyectos[index] = !nuevosProyectos[index];
    setProyectos(nuevosProyectos);
  };

  const cards = [];
  for (let i = 0; i < 6; i++) {
    cards.push(
      <div className="cardPrincipal" key={i}>
        <div className="cardPrincipal-content">
          Contenido de la tarjeta
        </div>
        <button className="cardPrincipal-button" onClick={() => toggleFavorito(i)}>
          Botón 
          <FontAwesomeIcon icon={faStar} className={`icono-favoritos ${proyectos[i] ? 'favorito' : ''}`} />
        </button>
      </div>
    );
  }

  return (
    <div>
      <center>
        <h2 className="display-5 fw-bolder">
          <span className="text-gradient d-inline">Proyectos destacados</span>
        </h2>
      </center>
      <div className="cardsContainer">{cards}</div>
    </div>
  );
}

export default ProyectosDestacados;
