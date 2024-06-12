import { getMarvelsCharacters, getMarvelsCharactersByName } from "./lib/data";
import { MarvelsCharactersList } from "./ui/components/marvelsCharactersList/marvelsCharactersList";

export default async function Home() {
  const data = await getMarvelsCharacters();

  const handleSearch = async (query: string) => {
    "use server";
    const filteredData = await getMarvelsCharactersByName(query);
    return filteredData.data?.results;
  };

  return (
    <main>
      <MarvelsCharactersList data={data.data.results} handleSearch={handleSearch} />
    </main>
  );
}
