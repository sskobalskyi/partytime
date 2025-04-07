import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SidebarProvider } from "@/components/ui/sidebar";
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
        <main className={"flex justify-center items-center w-full h-screen"}>
          {children}
        </main>
      </SidebarProvider>
    </NextIntlClientProvider>
  );
}
