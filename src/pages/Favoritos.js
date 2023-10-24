import React, { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritosContext";
import "../styles/Home.css";
import "../styles/styles.css";
import axios from "axios";

function Favoritos() {

  return (
    <div className="container px-5 py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0">
          <span className="text-gradient d-inline">Favoritos</span>
        </h1>
      </div>
      </div>

  );
}

export default Favoritos;
