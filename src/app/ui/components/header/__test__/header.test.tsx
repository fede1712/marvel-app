import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { FavouritesListProvider } from "@/app/contexts/favouritesContext";
import { Header } from "../header";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
  usePathname() {
    return "";
  },
}));

describe("Header", () => {
  it("Render the header component correctly", () => {
    render(
      <FavouritesListProvider>
        <Header />
      </FavouritesListProvider>
    );
    expect(screen.getByAltText("Marvel icon")).toBeInTheDocument();
    expect(screen.getByAltText("Heart icon")).toBeInTheDocument();
  });
});
