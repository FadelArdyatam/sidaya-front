import "./globals.css";
import type { Metadata } from "next";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Services Australia",
  description: "We deliver government payments and services",
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
