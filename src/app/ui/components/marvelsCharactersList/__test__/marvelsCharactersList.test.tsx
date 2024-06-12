import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { FavouritesListProvider } from "@/app/contexts/favouritesContext";
import { MarvelsCharactersList } from "../marvelsCharactersList";

const mockedMarvelCharactersList = [
  {
    id: 1,
    name: "Thor",
    thumbnail: { path: "/thor-image", extension: "jpg" },
  },
  {
    id: 2,
    name: "Spider-man",
    thumbnail: { path: "/spider-man-image", extension: "jpg" },
  },
];

describe("Marvels characters list", () => {
  it("Render the Marvels characters list component correctly", () => {
    render(
      <FavouritesListProvider>
        <MarvelsCharactersList data={mockedMarvelCharactersList} handleSearch={jest.fn()} />
      </FavouritesListProvider>
    );

    expect(screen.getByText("Thor")).toBeInTheDocument();
    expect(screen.getByText("Spider-man")).toBeInTheDocument();
    expect(screen.getByAltText("Thor image")).toBeInTheDocument();
    expect(screen.getByAltText("Spider-man image")).toBeInTheDocument();
  });
});
