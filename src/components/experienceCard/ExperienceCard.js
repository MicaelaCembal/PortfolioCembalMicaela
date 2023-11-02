import React, { useState, useRef, useEffect } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";
import { useFavorites } from "../../context/FavoritesContext";

export default function ExperienceCard({ cardInfo, isDark }) {
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const [colorArrays, setColorArrays] = useState([]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imgRef = useRef(null);
  const isExperienceInFavorites = favorites.some(
    (item) => item.company === cardInfo.company
  );

  useEffect(() => {
    const colorThief = new ColorThief();

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
      <div
        style={{ background: isImageLoaded ? `rgb(${colorArrays.join(", ")})` : "transparent" }}
        className="experience-banner"
      >
        {/* Resto de tu código para el banner */}
        <img
          crossOrigin="anonymous"
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={handleImageLoad}
        />
      </div>
      {/* Resto de tu código para el contenido de la tarjeta */}
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
  );
}
