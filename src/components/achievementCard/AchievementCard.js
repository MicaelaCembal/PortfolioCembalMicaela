import React, { useState } from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ achievement, onToggleFavorite }) {
  const [isFavorite, setIsFavorite] = useState(achievement.isFavorite);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(achievement.id, !isFavorite);
  };

  return (
    <div className={`achievement-card ${isFavorite ? "favorite" : ""}`}>
      {/* Contenido de la tarjeta... */}
      <button onClick={handleToggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
