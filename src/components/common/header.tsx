"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTransition } from "react";
import { useParams } from "next/navigation";

export function Header() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function switchLocale(locale: string) {
    console.log("locale", locale);
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: locale },
      );
    });
  }

  return (
    <header className="w-full px-6 py-4 bg-muted flex justify-between items-center border-b">
      <span className="text-xl font-bold">🎉 PartyTime</span>
      <div className="flex gap-2">
        {routing.locales.map((locale) => (
          <button
            key={locale}
            onClick={() => switchLocale(locale)}
            disabled={isPending}
            className="text-sm px-3 py-1 rounded border hover:bg-accent transition"
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}
