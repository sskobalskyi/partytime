import { ReactNode } from "react";
import "@/app/globals.css";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
