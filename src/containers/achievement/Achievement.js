import React, { useState } from "react";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import achievementsData from "../../portfolio"; 
import "./Achievement.scss"; // Estilo para el contenedor

export default function Achievement() {
  const { achievementsCards } = achievementsData; 
  const [favorites, setFavorites] = useState([]);


  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="achievements-container" >
      {achievementsCards.map((achievement) => (
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
          onToggleFavorite={() => toggleFavorite(achievement.id)}
          isFavorite={favorites.includes(achievement.id)}
        />
      ))}
    </div>
  );
}
