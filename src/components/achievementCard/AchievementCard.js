import React from "react";
import "./AchievementCard.scss";
import ColorThief from "colorthief";

export default function AchievementCard({ achievement, onToggleFavorite, isFavorite }) {
  const imgRef = React.createRef();
  const [colorArrays, setColorArrays] = React.useState([]);

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return values ? `rgb(${values.join(", ")})` : null;
  }

  return (
    <div
      className={`achievement-card ${isFavorite ? "favorite" : ""}`}
      style={{ background: rgb(colorArrays) }}
    >
      <div className="achievement-banner">
        <div className="achievement-blurred_div"></div>
        <h5 className="achievement-text-title">{achievement.title}</h5>
      </div>
      <img
        crossOrigin={"anonymous"}
        ref={imgRef}
        className="achievement-roundedimg"
        src={achievement.image}
        alt={achievement.title}
        onLoad={() => getColorArrays()}
      />
      <div className="achievement-text-details">
        <p className="achievement-text-subtitle">{achievement.subtitle}</p>
        <button onClick={onToggleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
        {isFavorite ? <span>⭐️</span> : <span>☆</span>}
      </div>
    </div>
  );
}
