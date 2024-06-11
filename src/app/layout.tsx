import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/roboto-condensed";

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
      <body>{children}</body>
    </html>
  );
}
