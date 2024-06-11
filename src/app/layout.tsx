import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/roboto-condensed";
import { Header } from "./ui/components/header/header";
import { FavoritesListProvider } from "./contexts/favouritesContext";

export const metadata: Metadata = {
  title: "Marvel App",
  description: "Application to get information about different Marvel characters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <FavoritesListProvider>
        <body>
          <Header />
          {children}
        </body>
      </FavoritesListProvider>
    </html>
  );
}
