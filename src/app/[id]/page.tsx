import { getMarvelsCharacterComics, getMarvelsCharacterDetails } from "../lib/data";
import Image from "next/image";
import { ComicList } from "../ui/components/comicList/comicList";
import { DetailSection } from "../ui/components/detailSection/detailSection";

export default async function MarveCharacterDetails({ params }: { params: { id: string } }) {
  const detailData = await getMarvelsCharacterDetails(params.id);
  const comics = await getMarvelsCharacterComics(params.id);

  return (
    <>
      <div className="w-full bg-black items-center align-middle cuted-corner-details md:flex md:justify-center lg:px-40 ">
        <Image
          alt={detailData.data.results[0].name}
          src={`${detailData.data.results[0].thumbnail.path}.${detailData.data.results[0].thumbnail.extension}`}
          width={320}
          height={320}
          className="w-full lg:w-80"
        />
        <DetailSection
          name={detailData.data.results[0].name}
          description={detailData.data.results[0].description}
          id={Number(params.id)}
        />
      </div>
      <ComicList comics={comics.data.results} />
    </>
  );
}
