"use client";

import Image from "next/image";
import Link from "next/link";
import MARVEL_ICON from "../../../../../public/marvel-icon.png";
import HEART_ICON from "../../../../../public/heart.png";
import { useContext } from "react";
import { FavouritesContext } from "@/app/contexts/favouritesContext";

export const Header = () => {
  const context = useContext(FavouritesContext);

  return (
    <header className="flex justify-between bg-black w-full p-4 align-middle md:px-12 md:py-4">
      <Link href="/">
        <Image alt="Marvel icon" src={MARVEL_ICON} width={130} />
      </Link>
      <div className="flex justify-between gap-2 items-center">
        <button onClick={() => context?.setShowFavourites(!context.showFavourites)}>
          <Image alt="Heart icon" src={HEART_ICON} width={24} />
        </button>
        <p className="text-white">{context?.favourites?.length ? context?.favourites?.length : 0}</p>
      </div>
    </header>
  );
};
