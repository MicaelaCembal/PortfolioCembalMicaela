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
    const { id, company, desc, date, companylogo, role } = experience;
    const newFavorite = {
      id,
      company,
      desc,
      date,
      companylogo,
      role,
    };
    setFavorites([...favorites, newFavorite]);
  };
  
  
  const removeFromFavorites = (experience) => {
    const updatedFavorites = favorites.filter(
      (item) => item.id !== experience.id
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
