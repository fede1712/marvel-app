import Image from "next/image";
import SEARCH_ICON from "../../../../../public/search-icon.png";
import { MarvelsCharacters } from "@/app/lib/interfaces/herosList";
import { FavouritesContext } from "@/app/contexts/favouritesContext";
import { useContext } from "react";

export const SearchBar = ({
  results,
  handleSearch,
  setFilteredResutls,
}: {
  results: MarvelsCharacters[];
  setFilteredResutls: (filteredResults: MarvelsCharacters[]) => void;
  handleSearch: (query: string) => Promise<MarvelsCharacters[]>;
}) => {
  const context = useContext(FavouritesContext);

  return (
    <div className="m-14">
      <div className="flex justify-start border-b-2 border-black items-center align-middle p-2 mb-2">
        <Image src={SEARCH_ICON} alt="Search icon" width={12} height={12} className="h-3 mr-2" />
        <input
          type="text"
          className="w-full border-0 outline-none"
          placeholder="Search a character..."
          onChange={async (e) => setFilteredResutls(await handleSearch(e.target.value))}
        />
      </div>
      <p className="text-sm">{!context?.showFavourites ? results.length : context?.favourites.length} Results</p>
    </div>
  );
};
