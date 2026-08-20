import { Link } from "react-scroll";
import { ArrowDown, MessageCircle } from "lucide-react";
import { usePortfolioContext } from "@/context/portfolio";
import IMG_3406 from "@/assets/IMG_3406.jpg";

export default function Hero() {
  const { data } = usePortfolioContext();
  const { greeting, headline, subheadline, philosophies } = data.hero;

  return (
    <section
      id="hero"
      className="relative bg-brand-warm px-6 pt-24 pb-20 sm:px-12 sm:pt-32 sm:pb-24 md:px-20"
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-5 mb-8">
          <img
            src={IMG_3406}
            alt="Williams Colmenares"
            className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-brand-terra/20 shadow-md"
          />
          <p className="font-mono text-sm uppercase tracking-widest text-brand-terra">
            {greeting}
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-ink leading-tight max-w-prose">
          {headline}
        </h1>

        <p className="mt-6 text-base sm:text-lg text-brand-muted leading-relaxed max-w-prose">
          {subheadline}
        </p>

        {philosophies.length > 0 && (
          <ul className="mt-8 space-y-3 max-w-prose">
            {philosophies.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-brand-muted text-sm sm:text-base"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-terra" />
                {point}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="story"
            spy
            smooth
            offset={-40}
            duration={600}
            className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-6 py-3 text-sm font-medium text-white cursor-pointer transition-colors hover:bg-brand-terra"
          >
            <ArrowDown className="h-4 w-4" />
            Explore the Journey
          </Link>
          <Link
            to="connect"
            spy
            smooth
            offset={-40}
            duration={600}
            className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-cream px-6 py-3 text-sm font-medium text-brand-ink cursor-pointer transition-colors hover:border-brand-terra/60 hover:bg-brand-terra/5"
          >
            <MessageCircle className="h-4 w-4" />
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
