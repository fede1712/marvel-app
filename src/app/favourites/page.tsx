import { MarvelsCharactersList } from "../ui/components/marvelsCharactersList/marvelsCharactersList";

export default function FavouritesPage() {
  return (
    <>
      <h1>FAVOURITES</h1>
      <MarvelsCharactersList data={[]} />;
    </>
  );
}
