import { ReactNode } from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
