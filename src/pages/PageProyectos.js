import React from "react";
import ProyectoById from "../components/ProyectoById";
import { Proyectos } from "../components/Proyectos";

import "../styles/PageProyectos.css";

function PageProyectos() {
  return (
    <div className="PageProyectos">
      <h1> Mis proyectos</h1>
      <div className="projectList">
        {Proyectos.map((project, idx) => {
          return (
            <ProyectoById id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default PageProyectos;
