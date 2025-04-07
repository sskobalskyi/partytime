import { ThemeToggle } from "@/components/common/theme-toggle";
import { LangSelector } from "@/components/common/lang-selector";

export function Header() {
  return (
    <header className="w-full px-6 py-4 bg-muted flex justify-between items-center border-b">
      <span className="text-xl font-bold">🎉 PartyTime</span>
      <div className="flex gap-2">
        <LangSelector />
        <ThemeToggle />
      </div>
    </header>
  );
}
