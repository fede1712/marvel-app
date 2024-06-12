"use client";
import HEART from "../../../../../public/heart.png";
import EMPY_HEART from "../../../../../public/empty-heart.png";
import Image from "next/image";
import { useContext } from "react";
import { FavouritesContext } from "../../../contexts/favouritesContext";

export const DetailSection = ({ name, description, id }: { name: string; description: string; id: number }) => {
  const context = useContext(FavouritesContext);
  return (
    <div className="flex flex-col pt-6 px-4 pb-12  align-middle lg:px-12 lg:pb-12">
      <div className="flex justify-between pb-6">
        <h2 className="uppercase text-white text-4xl">{name}</h2>
        <button onClick={() => context?.handleFavourites(id)}>
          <Image
            src={context?.favourites.includes(id) ? HEART : EMPY_HEART}
            alt="Heart icon"
            width={24}
            height={21}
            className="min-w-6 h-5"
          />
        </button>
      </div>
      <p className="text-white">{description}</p>
    </div>
  );
};
