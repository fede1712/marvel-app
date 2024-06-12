import React from "react";
import { render, screen } from "@testing-library/react";
import { FavouritesListProvider } from "@/app/contexts/favouritesContext";
import "@testing-library/jest-dom";
import { ComicList } from "../comicList";

describe("Comic list", () => {
  const mockedComicList = [
    {
      id: 1,
      title: "Mocked comic 1",
      images: [{ path: "/image 1", extension: "jpg" }],
    },
    {
      id: 2,
      title: "Mocked comic 2",
      images: [{ path: "/image 2", extension: "jpg" }],
    },
  ];

  it("Render the comic list correctly", () => {
    render(
      <FavouritesListProvider>
        <ComicList comics={mockedComicList} />
      </FavouritesListProvider>
    );

    expect(screen.getByText("Mocked comic 1")).toBeInTheDocument();
    expect(screen.getByText("Mocked comic 2")).toBeInTheDocument();
  });
});
