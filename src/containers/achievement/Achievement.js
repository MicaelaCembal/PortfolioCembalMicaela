import React, { useState } from "react";
import AchievementCard from "../../components/achievementCard/AchievementCard";

export default function Achievement({ achievements }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id, isFavorite) => {
    if (isFavorite) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="achievements-container">
      {achievements.map((achievement) => (
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
