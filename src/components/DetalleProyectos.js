import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFavorites } from "../context/FavoritosContext";
import axios from 'axios';

const DetalleProyecto = () => {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    const cargarProyectoSelect = async () => {
      try {
        const response = await axios.get('../../micaela.json');
        const proyectoEncontrado = response.data.find((p) => p.id === parseInt(id));
        setProyecto(proyectoEncontrado);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    cargarProyectoSelect();
  }, [id]);

  if (!proyecto) {
    return <div>Proyecto no encontrado</div>; 
  }

  const isFavorite = favorites.some((fav) => fav.id === proyecto.id);

  return (
    <div>
        <div className="container px-5 mb-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Projects</span>
          </h1>
        </div>
        </div>

      <h2>{proyecto.titulo}</h2>
      <p>{proyecto.descripcion}</p>
      <p>Fecha: {proyecto.fecha}</p>
      <p>Enlace: <a href={proyecto.url} target="_blank" rel="noopener noreferrer">{proyecto.url}</a></p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(proyecto.id)}>Quitar de Favoritos</button>
      ) : (
        <button onClick={() => addFavorite(proyecto)}>Agregar a Favoritos</button>
      )}
    </div>
  );
};

export default DetalleProyecto;
