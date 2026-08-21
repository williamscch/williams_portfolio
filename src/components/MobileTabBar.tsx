import { BookOpen, User, Wrench, Mail, Languages } from "lucide-react";
import { Link } from "react-scroll";
import { usePortfolioContext } from "@/context/portfolio";

export default function MobileTabBar() {
  const { locale, setLocale, data } = usePortfolioContext();
  const { nav } = data.ui;

  const toggleLocale = () => setLocale(locale === "en" ? "es" : "en");

  const navItems = [
    { label: nav.story, toId: "story", icon: BookOpen },
    { label: nav.beyondCodeMobile, toId: "beyond-code", icon: User },
    { label: nav.toolkit, toId: "toolkit", icon: Wrench },
    { label: nav.connect, toId: "connect", icon: Mail },
  ];

  return (
    <nav className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-t border-brand-border px-2 py-1.5 flex items-center justify-around">
      {navItems.map((option) => {
        const Icon = option.icon;
        return (
          <Link
            activeStyle={{ color: "hsl(var(--brand-terra))" }}
            key={option.toId}
            to={option.toId}
            spy
            smooth
            offset={-40}
            delay={200}
            duration={600}
            aria-label={option.label}
            className="flex flex-col items-center gap-0.5 text-brand-muted text-[10px] font-medium transition-colors"
          >
            <Icon className="w-4 h-4" />
            {option.label}
          </Link>
        );
      })}
      <button
        onClick={toggleLocale}
        aria-label="Toggle language"
        className="flex flex-col items-center gap-0.5 text-brand-terra text-[10px] font-bold transition-colors cursor-pointer"
      >
        <Languages className="w-4 h-4" />
        {locale === "en" ? "ES" : "EN"}
      </button>
    </nav>
  );
}
