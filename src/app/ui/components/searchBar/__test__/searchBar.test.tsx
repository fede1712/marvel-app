import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { FavouritesListProvider } from "@/app/contexts/favouritesContext";
import { SearchBar } from "../searchBar";

const mockedresults = [
  {
    id: 1,
    name: "Thor",
    thumbnail: { path: "/thor-image", extension: "jpg" },
  },
];

describe("Search bar", () => {
  it("Render the search bar component correctly", () => {
    render(
      <FavouritesListProvider>
        <SearchBar results={mockedresults} handleSearch={jest.fn()} setFilteredResutls={jest.fn()} />
      </FavouritesListProvider>
    );
    expect(screen.getByText("1 Results")).toBeInTheDocument();
  });
});
