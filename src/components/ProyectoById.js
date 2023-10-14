import React from "react";
import { useNavigate } from "react-router-dom";

function ProyectoById({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="ProyectoById"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProyectoById;
