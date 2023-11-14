import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProyectoDestacado.scss";
import { FaArrowLeft } from "react-icons/fa";
import { useProyecto } from "../context/ProyectosContext";

const ProyectoDestacado = () => {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);
  const navigate = useNavigate();
  const { proyectos } = useProyecto();

  useEffect(() => {
    const proyectoEncontrado = proyectos.find(item => item.id === parseInt(id, 10));
    setProyecto(proyectoEncontrado);
  }, [id, proyectos]);

  if (!proyecto) {
    return <p>Cargando detalles del proyecto...</p>;
  }

  const goBack = () => {
    navigate(-1); 
    navigate("#proyectosDestacados");
  };

  return (
    <>
      <div className="proyecto-destacado-container">
        <div className="proyecto-destacado-content">
          <FaArrowLeft className="iconoCerrar-modal" onClick={goBack} />
          <h1 className="proyecto-destacado-title">{proyecto.company}</h1>
          <p className="proyecto-destacado-role">Rol: {proyecto.role}</p>
          <p className="proyecto-destacado-date">Fecha: {proyecto.date}</p>
          <p className="proyecto-destacado-desc">Descripción: {proyecto.desc}</p>
        </div>
      </div>
    </>
  );
};

export default ProyectoDestacado;
