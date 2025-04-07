import { SiGithub } from "react-icons/si";

export function Footer() {
  return (
    <footer className="w-full flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground py-4 border-t px-6 gap-2">
      <p>© PartyTime – Est. 2025 · MIT License</p>

      <div className="flex gap-4">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition"
        >
          <SiGithub className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
