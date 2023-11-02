import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [favoriteCount, setFavoriteCount] = useState(favorites.length);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavoriteCount(favorites.length);
  }, [favorites]);

  const addToFavorites = (experience) => {
    setFavorites([...favorites, experience]);
  };

  const removeFromFavorites = (experience) => {
    const updatedFavorites = favorites.filter(
      (item) => item.company !== experience.company
    );
    setFavorites(updatedFavorites);
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
