import React, { useState, useRef, useEffect } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";
import { useFavorites } from "../../context/FavoritesContext";
import { Link } from "react-router-dom";

export default function ExperienceCard({ cardInfo, isDark }) {
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const [colorArrays, setColorArrays] = useState([]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imgRef = useRef(null);
  const isExperienceInFavorites = favorites.some((item) => item.id === cardInfo.id);
  
  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <center>
        <h1 className="color-texto">{cardInfo.company}</h1>
      </center>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
      </div>
      <center>
        <div className="button-container">
          <Link to={`proyectoDestacado/${cardInfo.id}`}>
            <button
              className={`favorite-button ${isDark ? "dark-mode-text" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Ir a Detalles del Proyecto
            </button>
          </Link>
          <button
            className={`favorite-button ${isDark ? "dark-mode-text" : ""}`}
            onClick={() => {
              if (isExperienceInFavorites) {
                removeFromFavorites(cardInfo);
              } else {
                addToFavorites(cardInfo);
              }
            }}
          >
            {isExperienceInFavorites ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
          </button>
        </div>
      </center>
    </div>
  );
}
