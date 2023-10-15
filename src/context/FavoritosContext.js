import React, { createContext, useState, useContext } from 'react';

const FavoritosContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (creation) => {
    setFavorites([...favorites, creation]);
  };

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((creation) => creation.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <FavoritosContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritosContext);
};
