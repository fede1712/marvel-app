import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { FavouritesListProvider } from "@/app/contexts/favouritesContext";
import { DetailSection } from "../detailSection";

describe("Detail Section", () => {
  it("Render the detail section correctly", () => {
    render(
      <FavouritesListProvider>
        <DetailSection name="Thor" description="Description for Thor" id={1} />
      </FavouritesListProvider>
    );

    expect(screen.getByText("Description for Thor")).toBeInTheDocument();
    expect(screen.getByText("Thor")).toBeInTheDocument();
  });

  it("Expect heart button is working correctly", () => {
    render(
      <FavouritesListProvider>
        <DetailSection name="Thor" description="Description for Thor" id={1} />
      </FavouritesListProvider>
    );
    const heartIcon = screen.getByRole("button");
    fireEvent.click(heartIcon);

    expect(screen.getByAltText("Heart icon")).toBeInTheDocument();
  });
});
