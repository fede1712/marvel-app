import { getMarvelsCharacters } from "./lib/data";
import { MarvelsCharactersList } from "./ui/components/marvelsCharactersList/marvelsCharactersList";

export default async function Home() {
  const data = await getMarvelsCharacters();
  return (
    <main>
      <MarvelsCharactersList data={data.data.results} />
    </main>
  );
}
