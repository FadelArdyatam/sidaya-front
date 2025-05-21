import "./globals.css";
import type { Metadata } from "next";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Sidaya ",
  description: "Menghargai Perjalanan Lansia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
