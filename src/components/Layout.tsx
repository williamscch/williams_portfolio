import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { PanelLeft } from "lucide-react";
import { Button } from "@/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";
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
  const [open, setOpen] = useState(false);
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
          <Sheet onOpenChange={setOpen} open={open}>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs bg-brand-cream">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navOptions.map((option) => (
                  <Link
                    onClick={() => setOpen(false)}
                    key={option.toId}
                    to={option.toId}
                    className="pl-2 text-brand-muted text-xl font-semibold transition-colors hover:text-brand-ink cursor-pointer"
                  >
                    {option.label}
                  </Link>
                ))}
                <button
                  onClick={() => { toggleLocale(); setOpen(false); }}
                  className="pl-2 text-brand-terra text-xl font-semibold text-left cursor-pointer"
                >
                  {locale === "en" ? "ES" : "EN"}
                </button>
              </nav>
            </SheetContent>
          </Sheet>

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
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
