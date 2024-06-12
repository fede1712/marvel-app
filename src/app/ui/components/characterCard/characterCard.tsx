"use client";

import Image from "next/image";
import HEART from "../../../../../public/heart.png";
import EMPTY_HEART from "../../../../../public/empty-heart.png";
import FILL_HEART from "../../../../../public/fill-heart.png";
import { useContext, useEffect, useState } from "react";
import { FavouritesContext } from "@/app/contexts/favouritesContext";
import Link from "next/link";

export const CharacterCard = ({ name, src, id }: { name: string; src: string; id: number }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [correctHeart, setCorrectHeart] = useState(FILL_HEART);

  const context = useContext(FavouritesContext);

  useEffect(() => {
    if (isMouseOver) {
      setCorrectHeart(FILL_HEART);
    } else {
      setCorrectHeart(HEART);
    }
  }, [isMouseOver]);

  return (
    <div className="min-h-44">
      <Link href={`/${id}`}>
        <div className="h-48 ">
          <Image
            src={src}
            alt={`${name} image`}
            className="h-full min-w-6 object-cover md:w-full"
            width={100}
            height={100}
          />
        </div>
      </Link>
      <div
        className="flex justify-between align-middle items-center p-4 pb-6 border-t-4 border-marvel-red cuted-corner"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() =>
          setTimeout(() => {
            setIsMouseOver(false);
          }, 200)
        }
      >
        <p className="text-white uppercase text-sm whitespace-nowrap overflow-hidden text-ellipsis mr-2">{name}</p>
        <button onClick={() => context?.handleFavourites(id)} className="min-w-3">
          <Image
            src={context?.favourites?.includes(id) ? correctHeart : EMPTY_HEART}
            alt={context?.favourites?.includes(id) ? "Heart icon" : "Empty heart icon"}
            className="w-3"
          />
        </button>
      </div>
    </div>
  );
};
