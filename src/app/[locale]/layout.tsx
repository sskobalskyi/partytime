import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/sidebar";
import { SidebarToggle } from "@/components/common/sidebar-trigger";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarToggle />
        <main className={"flex items-center justify-center w-full"}>
          {children}
        </main>
      </SidebarProvider>
    </NextIntlClientProvider>
  );
}
