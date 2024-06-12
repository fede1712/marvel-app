import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { FavouritesListProvider } from "@/app/contexts/favouritesContext";
import { CharacterCard } from "../characterCard";

describe("Character card", () => {
  it("Render the character name correctly", () => {
    render(
      <FavouritesListProvider>
        <CharacterCard name={"Thor"} src="/jpg" id={1} />
      </FavouritesListProvider>
    );
    expect(screen.getByText("Thor")).toBeInTheDocument();
  });

  it("Render the character image correctly", () => {
    render(
      <FavouritesListProvider>
        <CharacterCard name={"Thor"} src="/jpg" id={1} />
      </FavouritesListProvider>
    );
    const imgElement = screen.getByAltText("Thor image");
    expect(imgElement).toBeInTheDocument();
  });

  it("Render the heart button correctly", () => {
    render(
      <FavouritesListProvider>
        <CharacterCard name={"Thor"} src="/jpg" id={1} />
      </FavouritesListProvider>
    );
    const heartIcon = screen.getByRole("button");
    expect(heartIcon).toBeInTheDocument();
  });

  it("Expect heart button is working correctly", () => {
    render(
      <FavouritesListProvider>
        <CharacterCard name={"Thor"} src="/jpg" id={1} />
      </FavouritesListProvider>
    );
    const heartIcon = screen.getByRole("button");
    fireEvent.click(heartIcon);

    expect(screen.getByAltText("Heart icon")).toBeInTheDocument();
  });
});
