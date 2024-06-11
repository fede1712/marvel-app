"use client";

import { MarvelsCharacters } from "@/app/lib/interfaces/herosList";
import { CharacterCard } from "../characterCard/characterCard";
import { SearchBar } from "../searchBar/searchBar";
import { useState } from "react";

export const MarvelsCharactersList = ({ data }: { data: MarvelsCharacters[] }) => {
  const [results, setResults] = useState(data);
  const [search, setSearch] = useState("");
  return (
    <>
      <SearchBar data={data} results={results} setResults={setResults} setSearch={setSearch} search={search} />
      <div className="grid grid-cols-2 gap-4 m-14 md:grid-cols-4 xl:grid-cols-7">
        {results.map((hero: MarvelsCharacters) => {
          return (
            <CharacterCard
              name={hero.name}
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              like={false}
              key={hero.id}
            />
          );
        })}
      </div>
    </>
  );
};
