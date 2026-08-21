import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { cn } from "@/utils/cn";
import { usePortfolioContext } from "@/context/portfolio";

export default function DesktopNavbar() {
  const { locale, setLocale, data } = usePortfolioContext();
  const [scrolled, setScrolled] = useState(false);
  const { nav } = data.ui;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 64);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => setLocale(locale === "en" ? "es" : "en");

  const navItems = [
    { label: nav.story, toId: "story" },
    { label: nav.beyondCode, toId: "beyond-code" },
    { label: nav.toolkit, toId: "toolkit" },
    { label: nav.connect, toId: "connect" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-30 hidden sm:flex justify-between items-center gap-4 border-b bg-brand-warm px-6 transition-all ease delay-400",
        scrolled
          ? "py-2 border-b shadow-md"
          : "py-4 border-0"
      )}
    >
      <div className="flex w-full gap-6 items-center justify-center relative">
        {navItems.map((option) => (
          <Link
            activeStyle={{ color: "hsl(var(--brand-terra))" }}
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
        className="inline-flex font-mono text-xs uppercase tracking-widest text-brand-terra hover:text-brand-terra-hover transition-colors cursor-pointer"
      >
        {locale === "en" ? "ES" : "EN"}
      </button>
    </header>
  );
}
