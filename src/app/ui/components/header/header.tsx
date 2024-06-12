"use client";

import Image from "next/image";
import Link from "next/link";
import MARVEL_ICON from "../../../../../public/marvel-icon.png";
import HEART_ICON from "../../../../../public/heart.png";
import { useContext } from "react";
import { FavouritesContext } from "@/app/contexts/favouritesContext";
import { useRouter, usePathname } from "next/navigation";

export const Header = () => {
  const context = useContext(FavouritesContext);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="flex justify-between bg-black w-full p-4 align-middle md:px-12 md:py-4">
      <Link href="/">
        <Image alt="Marvel icon" src={MARVEL_ICON} width={130} />
      </Link>
      <div className="flex justify-between gap-2 items-center">
        <button
          onClick={() => {
            if (pathname !== "/") {
              router.push("/");
            }
            context?.setShowFavourites(!context.showFavourites);
          }}
          className="w-full"
        >
          <Image alt="Heart icon" src={HEART_ICON} width={24} className="h-full min-w-6 object-cover md:w-full" />
        </button>
        <p className="text-white">{context?.favourites?.length ? context?.favourites?.length : 0}</p>
      </div>
    </header>
  );
};
