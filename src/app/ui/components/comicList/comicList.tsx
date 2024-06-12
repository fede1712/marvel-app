import { Comics } from "@/app/lib/interfaces/herosList";
import Image from "next/image";

export const ComicList = ({ comics }: { comics: Comics[] }) => {
  return (
    <div className="flex flex-col p-6 pt-6 md:p-12 lg:p-40 lg:pt-12">
      <h2 className="font-bold text-3xl">COMICS</h2>
      <div className="flex space-x-4 overflow-x-auto scrollable-element">
        {comics.map((eachComic: Comics) => {
          return (
            <div className="w-32 md:w-40 flex-shrink-0" key={eachComic.id}>
              <Image
                src={`${eachComic?.images[0]?.path}.${eachComic.images[0]?.extension}`}
                alt={`${eachComic.title} image`}
                width={180}
                height={270}
                className="w-44 h-72 object-cover"
              />
              <p>{eachComic.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
