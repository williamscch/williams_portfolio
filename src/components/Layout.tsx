import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { BookOpen, User, Wrench, Mail, Languages } from "lucide-react";
import { cn } from "@/utils/cn";
import { usePortfolioContext } from "@/context/portfolio";

const navOptions = [
  { label: "Story", toId: "story" },
  { label: "Beyond Code", toId: "beyond-code" },
  { label: "Toolkit", toId: "toolkit" },
  { label: "Connect", toId: "connect" },
];

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { locale, setLocale } = usePortfolioContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY >= 64);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => setLocale(locale === "en" ? "es" : "en");

  return (
    <div className="z-50 flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        <header
          className={cn(
            "sticky top-0 z-30 flex justify-between items-center gap-4 border-b bg-brand-warm px-4 sm:px-6 transition-all ease delay-400",
            scrolled
              ? "h-10 sm:py-2 sm:border-b sm:shadow-md"
              : "h-12 sm:py-4 sm:border-0"
          )}
        >
          <div className="hidden sm:flex w-full gap-6 items-center justify-center relative">
            {navOptions.map((option) => (
              <Link
                activeStyle={{ color: "hsl(14 65% 50%)" }}
                key={option.toId}
                className="font-medium cursor-pointer text-brand-muted hover:text-brand-ink transition-colors"
                to={option.toId}
                spy
                smooth
                offset={-40}
                delay={200}
                duration={600}
              >
                {option.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleLocale}
            className="hidden sm:inline-flex font-mono text-xs uppercase tracking-widest text-brand-terra hover:text-brand-terra-hover transition-colors cursor-pointer"
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
        </header>
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
      </div>
      {/* Mobile bottom tab bar */}
      <nav className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-t border-brand-border px-2 py-1.5 flex items-center justify-around safe-area-bottom">
        {navOptions.map((option) => (
          <Link
            activeStyle={{ color: "hsl(14 65% 50%)" }}
            key={option.toId}
            to={option.toId}
            spy
            smooth
            offset={-40}
            delay={200}
            duration={600}
            className="flex flex-col items-center gap-0.5 text-brand-muted text-[10px] font-medium transition-colors"
          >
            {option.toId === "story" && <BookOpen className="w-4 h-4" />}
            {option.toId === "beyond-code" && <User className="w-4 h-4" />}
            {option.toId === "toolkit" && <Wrench className="w-4 h-4" />}
            {option.toId === "connect" && <Mail className="w-4 h-4" />}
            {option.label}
          </Link>
        ))}
        <button
          onClick={toggleLocale}
          className="flex flex-col items-center gap-0.5 text-brand-terra text-[10px] font-bold transition-colors"
        >
          <Languages className="w-4 h-4" />
          {locale === "en" ? "ES" : "EN"}
        </button>
      </nav>
    </div>
  );
}
