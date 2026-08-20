import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";
import { usePortfolioContext } from "@/context/portfolio";

export default function Footer() {
  const { data } = usePortfolioContext();
  const { social } = data.connect;

  return (
    <footer className="bg-brand-ink px-6 py-10 sm:px-12 md:px-20">
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-brand-cream/60">
          &copy; {new Date().getFullYear()} Williams Colmenares. Built with care.
        </p>

        <div className="flex items-center gap-4">
          {social.map((account) => {
            const Icon = account.icon;
            return (
              <a
                key={account.name}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cream/60 hover:text-brand-terra transition-colors"
                aria-label={account.name}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}

          <span className="text-brand-cream/20">|</span>

          <Link
            to="hero"
            spy
            smooth
            duration={600}
            className="inline-flex items-center gap-1 text-xs text-brand-cream/60 hover:text-brand-terra transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3 h-3" />
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
