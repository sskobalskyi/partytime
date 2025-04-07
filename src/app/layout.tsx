import type { Metadata } from "next";
import "./globals.css";
import {cn} from "@/lib/utils";

export const metadata: Metadata = {
  title: "party time",
  description: "Have fun after boring scheduling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased flex items-center justify-center")}>
      {children}
      </body>
      </html>
  );
}
