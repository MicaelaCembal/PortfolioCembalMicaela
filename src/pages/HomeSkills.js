import React from "react";
import { useParams } from "react-router-dom";
import { Proyectos } from "../components/Proyectos";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/HomeSkills.css";

function HomeSkills() {
  const { id } = useParams();
  const project = Proyectos[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default HomeSkills;
