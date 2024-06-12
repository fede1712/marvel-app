"use client";

import { MarvelsCharacters } from "@/app/lib/interfaces/herosList";
import { CharacterCard } from "../characterCard/characterCard";
import { SearchBar } from "../searchBar/searchBar";
import { useContext, useState, useEffect } from "react";
import { FavouritesContext } from "@/app/contexts/favouritesContext";

export const MarvelsCharactersList = ({
  data,
  handleSearch,
}: {
  data: MarvelsCharacters[];
  handleSearch: (query: string) => Promise<MarvelsCharacters[]>;
}) => {
  const [results, setResults] = useState(data);
  const [filteredResutls, setFilteredResutls] = useState<MarvelsCharacters[] | []>([]);
  const context = useContext(FavouritesContext);

  useEffect(() => {
    if (filteredResutls?.length > 0) {
      setResults(filteredResutls);
    } else {
      setResults(data);
    }
  }, [filteredResutls, data]);

  return (
    <>
      <SearchBar results={results} handleSearch={handleSearch} setFilteredResutls={setFilteredResutls} />
      <div className="grid grid-cols-2 gap-4 m-14 md:grid-cols-4 xl:grid-cols-7">
        {context?.showFavourites &&
          results?.map((hero: MarvelsCharacters) => {
            if (context.favourites.includes(hero.id)) {
              return (
                <CharacterCard
                  name={hero.name}
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  key={hero.id}
                  id={hero.id}
                />
              );
            }
          })}

        {!context?.showFavourites &&
          results?.map((hero: MarvelsCharacters) => {
            return (
              <CharacterCard
                name={hero.name}
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                key={hero.id}
                id={hero.id}
              />
            );
          })}
      </div>
    </>
  );
};
