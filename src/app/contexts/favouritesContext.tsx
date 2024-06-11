"use client";
import { ReactNode, createContext, useState } from "react";

type FavouritesContextType = {
  favourites: number[];
  setFavourites: (favourites: number[]) => void;
  handleFavourites: (id: number) => void;
  showFavourites: boolean;
  setShowFavourites: (showFavourites: boolean) => void;
};

export const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavoritesListProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<number[]>([]);
  const [showFavourites, setShowFavourites] = useState(false);

  const handleFavourites = (currentId: number) => {
    if (currentId) {
      if (favourites.includes(currentId)) {
        setFavourites(favourites.filter((id) => id !== currentId));
      } else {
        setFavourites([...favourites, currentId]);
      }
    }
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, setFavourites, handleFavourites, showFavourites, setShowFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
