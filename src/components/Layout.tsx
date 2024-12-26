import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { PanelLeft } from "lucide-react";
import { Button } from "@/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";
import { cn } from "@/utils/cn";

interface LayoutProps {
  options: {
    label: string;
    toId: string;
  }[];
  children?: React.ReactNode;
}

export default function Layout({ options, children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 64) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="z-50 flex min-h-screen w-full flex-col ">
      <div className="flex flex-col">
        <header
          className={cn(
            "sticky top-0 z-30 flex justify-between sm:gap-4 sm:py-4 md:justify-end h-12 items-center gap-4 border-b bg-background px-4 sm:h-auto sm:border-0 sm:bg-background sm:px-6 sm:hover:bg-muted transition-all ease delay-400",
            scrolled
              ? "sm:disabled:hover h-10 sm:py-2 sm:border-b sm:shadow-md"
              : ""
          )}
        >
          <Sheet onOpenChange={setOpen} open={open}>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {options
                  .filter((option) => option.toId !== "me")
                  .map((option, index) => (
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      key={index}
                      to={option.toId}
                      className="pl-2 text-muted-foreground text-xl font-semibold transition-colors hover:text-foreground cursor-pointer"
                    >
                      {option.label}
                    </Link>
                  ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="hidden sm:flex w-full gap-6 items-center justify-center relative">
            {options.map((option, i) => (
              <Link
                activeStyle={{ color: "#2563EB" }}
                key={i + option.toId}
                className={cn(
                  "font-medium cursor-pointer",
                  option.toId === "me" ? "text-primary text-xl" : ""
                )}
                to={option.toId}
                spy
                hashSpy
                smooth
                offset={40}
                delay={200}
                duration={600}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
