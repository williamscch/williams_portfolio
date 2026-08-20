import { Link } from "react-scroll";
import { ArrowDown, MessageCircle } from "lucide-react";
import { usePortfolioContext } from "@/context/portfolio";

export default function Hero() {
  const { data } = usePortfolioContext();
  const { greeting, headline, subheadline, philosophies } = data.hero;

  return (
    <section
      id="hero"
      className="relative bg-[#F4EFEA] px-6 pt-24 pb-20 sm:px-12 sm:pt-32 sm:pb-24 md:px-20"
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-5 mb-8">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#C25E3E]/10 text-[#C25E3E] text-2xl font-bold tracking-tight select-none">
            WC
          </div>
          <p className="font-mono text-sm uppercase tracking-widest text-[#C25E3E]">
            {greeting}
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#19191C] leading-tight max-w-prose">
          {headline}
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#4A4A52] leading-relaxed max-w-prose">
          {subheadline}
        </p>

        {philosophies.length > 0 && (
          <ul className="mt-8 space-y-3 max-w-prose">
            {philosophies.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-[#4A4A52] text-sm sm:text-base"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C25E3E]" />
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
            className="inline-flex items-center gap-2 rounded-full bg-[#19191C] px-6 py-3 text-sm font-medium text-white cursor-pointer transition-colors hover:bg-[#C25E3E]"
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
            className="inline-flex items-center gap-2 rounded-full border border-[#DDD5CA] bg-[#FAF7F2] px-6 py-3 text-sm font-medium text-[#19191C] cursor-pointer transition-colors hover:border-[#C25E3E]/60 hover:bg-[#C25E3E]/5"
          >
            <MessageCircle className="h-4 w-4" />
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
