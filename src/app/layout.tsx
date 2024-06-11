import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/roboto-condensed";
import { Header } from "./ui/components/header/header";

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
      <body>
        <Header favouritesLength={0} />
        {children}
      </body>
    </html>
  );
}
