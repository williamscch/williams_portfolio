import { ExternalLink, ArrowRight } from "lucide-react";
import { usePortfolioContext } from "@/context/portfolio";

function renderNarrative(text: string) {
  return text.split("\n\n").map((paragraph, i) => {
    const parts = paragraph.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={i} className="text-[#4A4A52] leading-relaxed text-sm sm:text-base max-w-prose mb-4 last:mb-0">
        {parts.map((part, j) =>
          j % 2 === 1 ? (
            <strong key={j} className="font-semibold text-[#19191C]">{part}</strong>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
      </p>
    );
  });
}

export default function StoryChapters() {
  const { data, openCaseStudy } = usePortfolioContext();

  return (
    <section id="story" className="bg-[#F4EFEA] px-6 py-20 sm:px-12 md:px-20">
      <div className="mx-auto max-w-3xl space-y-24">
        {data.chapters.map((chapter) => (
          <article key={chapter.id}>
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C25E3E]">
                {chapter.chapterNumber}
              </span>
              {chapter.timeframe && (
                <span className="ml-3 font-mono text-xs uppercase tracking-widest text-[#4A4A52]">
                  {chapter.timeframe}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#19191C] mb-2">
              {chapter.title}
            </h2>
            {chapter.subtitle && (
              <p className="text-sm text-[#4A4A52] mb-6">{chapter.subtitle}</p>
            )}

            {renderNarrative(chapter.narrative)}

            {chapter.quote && (
              <blockquote className="mt-8 border-l-2 border-[#C25E3E] pl-4 py-2 bg-[#ECE5DC]/60 rounded-r-lg p-4">
                <p className="italic text-[#19191C] text-sm sm:text-base leading-relaxed mb-2">
                  &ldquo;{chapter.quote.message}&rdquo;
                </p>
                <footer className="text-xs text-[#4A4A52]">
                  <span className="font-medium text-[#19191C]">{chapter.quote.from}</span>
                  {chapter.quote.role && (
                    <span> — {chapter.quote.role}</span>
                  )}
                </footer>
              </blockquote>
            )}

            {chapter.caseStudyIds.length > 0 && (
              <div className="mt-10 space-y-4">
                {chapter.caseStudyIds.map((csId) => {
                  const cs = data.caseStudies[csId];
                  if (!cs) return null;
                  return (
                    <div
                      key={cs.id}
                      className="rounded-xl border border-[#DDD5CA] bg-[#FAF7F2] p-5 hover:border-[#C25E3E]/60 transition-all hover:shadow-md"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {cs.client && (
                          <span className="font-mono text-xs uppercase tracking-widest text-[#C25E3E] bg-[#C25E3E]/10 px-2 py-0.5 rounded-full">
                            {cs.client}
                          </span>
                        )}
                        {cs.timeframe && (
                          <span className="font-mono text-xs text-[#4A4A52]">
                            {cs.timeframe}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-[#19191C] mb-1">
                        {cs.title}
                      </h3>
                      {cs.tagline && (
                        <p className="text-sm text-[#4A4A52] mb-3 max-w-prose">
                          {cs.tagline}
                        </p>
                      )}

                      <div className="flex flex-wrap items-center gap-3">
                        {cs.tech && (
                          <div className="flex flex-wrap gap-1.5">
                            {cs.tech.slice(0, 4).map((t) => (
                              <span
                                key={t}
                                className="text-xs font-mono uppercase tracking-wider text-[#4A4A52] bg-[#F4EFEA] px-2 py-0.5 rounded"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="ml-auto flex items-center gap-3">
                          {cs.live && (
                            <a
                              href={cs.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium text-[#4A4A52] hover:text-[#C25E3E] transition-colors"
                            >
                              Live
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                          <button
                            onClick={() => openCaseStudy(cs.id)}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C25E3E] hover:text-[#A84E33] transition-colors cursor-pointer"
                          >
                            Read Case Study
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
