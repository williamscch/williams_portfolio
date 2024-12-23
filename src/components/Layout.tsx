import { Button } from "@/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";
import { PanelLeft } from "lucide-react";
import { Link } from "react-scroll";

interface LayoutProps {
  options: {
    label: string;
    toId: string;
  }[];
  children?: React.ReactNode;
}

export default function Layout({ options, children }: LayoutProps) {
  return (
    <div className="z-50 flex min-h-screen w-full flex-col ">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <header className="sticky top-0 z-30 flex justify-between md:justify-end h-12 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-4 text-lg font-medium">
                {options.map((option, index) => (
                  <Link
                    key={index}
                    to={option.toId}
                    className="flex pl-2 h-9 w-full items-center justify-left rounded-lg text-muted-foreground text-sm transition-colors hover:text-foreground md:h-8 md:w-full gap-2"
                  >
                    <span className="">{option.label}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="hidden sm:flex w-full gap-6 items-center justify-center">
            {options.map((option, i) => (
              <Link
                activeClass="text-accent-foreground"
                key={i + option.toId}
                className="font-medium cursor-pointer"
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
