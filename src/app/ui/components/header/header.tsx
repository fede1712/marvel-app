import Image from "next/image";
import Link from "next/link";
import MARVEL_ICON from "../../../../../public/marvel-icon.png";
import HEART_ICON from "../../../../../public/heart.png";

export const Header = ({ favouritesLength }: { favouritesLength: number }) => {
  return (
    <header className="flex justify-between bg-black w-full p-4 align-middle md:px-12 md:py-4">
      <Link href="/">
        <Image alt="Marvel icon" src={MARVEL_ICON} width={130} />
      </Link>
      <div className="flex justify-between gap-2 items-center">
        <Link href={"/favourites"}>
          <Image alt="Heart icon" src={HEART_ICON} width={24} />
        </Link>
        <p className="text-white">{favouritesLength}</p>
      </div>
    </header>
  );
};
