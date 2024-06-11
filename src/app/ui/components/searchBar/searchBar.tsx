import Image from "next/image";
import SEARCH_ICON from "../../../../../public/search-icon.png";
import { MarvelsCharacters } from "@/app/lib/interfaces/herosList";
import { FavouritesContext } from "@/app/contexts/favouritesContext";
import { useContext } from "react";

export const SearchBar = ({
  data,
  results,
  setResults,
  setSearch,
  search,
}: {
  data: MarvelsCharacters[];
  results: MarvelsCharacters[];
  setResults: (result: MarvelsCharacters[]) => void;
  setSearch: (search: string) => void;
  search: string;
}) => {
  const handleSearch = (value: string) => {
    setSearch(value);
    if (search.length > 0) {
      const filteredResults = data.filter((hero: MarvelsCharacters) => {
        if (hero.name.toLowerCase().includes(value.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      setResults(filteredResults);
    }
  };
  const context = useContext(FavouritesContext);

  return (
    <div className="m-14">
      <div className="flex justify-start border-b-2 border-black items-center align-middle p-2 mb-2">
        <Image src={SEARCH_ICON} alt="Search icon" width={12} height={12} className="h-3 mr-2" />
        <input
          type="text"
          className="w-full border-0 outline-none"
          placeholder="Search a character..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <p className="text-sm">{!context?.showFavourites ? results.length : context?.favourites.length} Results</p>
    </div>
  );
};
