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
  const isExperienceInFavorites = favorites.some(
    (item) => item.company === cardInfo.company
  );

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  useEffect(() => {
    const colorThief = new ColorThief();
    console.log(cardInfo);

    if (isImageLoaded) {
      setColorArrays(colorThief.getColor(imgRef.current));
    }
  }, [isImageLoaded, cardInfo.companylogo]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

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
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
      <center>
        <div className="button-container">
          <Link to={`proyectoDetalle/${cardInfo.idProyecto}`}>
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
