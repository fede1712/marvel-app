"use client";
import Image from "next/image";
import HEART from "../../../../../public/heart.png";
import EMPTY_HEART from "../../../../../public/empty-heart.png";
import FILL_HEART from "../../../../../public/fill-heart.png";
import { useEffect, useState } from "react";
import async from "../../../page";

export const CharacterCard = ({ name, src, like }: { name: string; src: string; like: boolean }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [correctHeart, setCorrectHeart] = useState(FILL_HEART);

  useEffect(() => {
    if (isMouseOver) {
      setCorrectHeart(FILL_HEART);
    } else {
      setCorrectHeart(HEART);
    }
  }, [isMouseOver]);

  return (
    <div className="min-h-44">
      <div className="h-48 ">
        <img src={src} alt={`${name} image`} className="h-full object-cover md:w-full" />
      </div>
      <div
        className="flex justify-between align-middle items-center p-4 pb-6 border-t-4 border-marvel-red cuted-corner"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() =>
          setTimeout(() => {
            setIsMouseOver(false);
          }, 250)
        }
      >
        <p className="text-white uppercase text-sm whitespace-nowrap overflow-hidden text-ellipsis mr-2">{name}</p>
        <button>
          <Image src={like ? correctHeart : EMPTY_HEART} alt="Heart icon" width={12} height={12} className="min-w-3" />
        </button>
      </div>
    </div>
  );
};
