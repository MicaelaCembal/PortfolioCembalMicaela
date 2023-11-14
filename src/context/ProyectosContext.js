import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProyectoContext = createContext();

export const ProyectoProvider = ({ children }) => {
  const [proyectos, setproyectos] = useState([]);

  useEffect(() => {
    axios.get('/proyectosDestacados.json')
      .then((response) => setproyectos(response.data))
      .catch((error) => console.error("Error al obtener las proyectos:", error));
  }, []);

  return (
    <ProyectoContext.Provider value={{ proyectos }}>
      {children}
    </ProyectoContext.Provider>
  );
};

export const useProyecto = () => {
  return useContext(ProyectoContext);
};
