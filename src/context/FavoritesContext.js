import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const addToFavorites = (experience) => {
    setFavorites([...favorites, experience]);
    setFavoriteCount(favorites.length + 1);
  };

  const removeFromFavorites = (experience) => {
    const updatedFavorites = favorites.filter(
      (item) => item.company !== experience.company
    );
    setFavorites(updatedFavorites);
    setFavoriteCount(updatedFavorites.length);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        favoriteCount,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
