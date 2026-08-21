import { ExternalLink, ArrowRight } from "lucide-react";
import { usePortfolioContext } from "@/context/portfolio";

function renderNarrative(text: string) {
  return text.split("\n\n").map((paragraph, i) => {
    const parts = paragraph.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={i} className="text-brand-muted leading-relaxed text-sm sm:text-base max-w-prose mb-4 last:mb-0">
        {parts.map((part, j) =>
          j % 2 === 1 ? (
            <strong key={j} className="font-semibold text-brand-ink">{part}</strong>
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
  const { ui } = data;

  return (
    <section id="story" className="bg-brand-warm px-6 py-20 sm:px-12 md:px-20">
      <div className="mx-auto max-w-3xl space-y-24">
        {data.chapters.map((chapter) => (
          <article key={chapter.id}>
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-terra">
                {chapter.chapterNumber}
              </span>
              {chapter.timeframe && (
                <span className="ml-3 font-mono text-xs uppercase tracking-widest text-brand-muted">
                  {chapter.timeframe}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-ink mb-2">
              {chapter.title}
            </h2>
            {chapter.subtitle && (
              <p className="text-sm text-brand-muted mb-6">{chapter.subtitle}</p>
            )}

            {renderNarrative(chapter.narrative)}

            {chapter.caseStudyIds.length > 0 && (
              <div className="mt-10 space-y-4">
                {chapter.caseStudyIds.map((csId) => {
                  const cs = data.caseStudies[csId];
                  if (!cs) return null;
                  return (
                    <div
                      key={cs.id}
                      className="rounded-xl border border-brand-border bg-brand-cream p-5 hover:border-brand-terra/60 transition-all hover:shadow-md"
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
                        {cs.client && (
                          <span className="whitespace-nowrap font-mono text-xs uppercase tracking-widest text-brand-terra bg-brand-terra/10 px-2 py-0.5 rounded-full">
                            {cs.client}
                          </span>
                        )}
                        {cs.timeframe && (
                          <span className="font-mono text-xs text-brand-muted">
                            {cs.timeframe}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-brand-ink mb-1">
                        {cs.title}
                      </h3>
                      {cs.tagline && (
                        <p className="text-sm text-brand-muted mb-3 max-w-prose">
                          {cs.tagline}
                        </p>
                      )}

                      <div className="flex flex-wrap items-center gap-3">
                        {cs.tech && (
                          <div className="flex flex-wrap gap-1.5">
                            {cs.tech.slice(0, 4).map((t) => (
                              <span
                                key={t}
                                className="text-xs font-mono uppercase tracking-wider text-brand-muted bg-brand-warm px-2 py-0.5 rounded"
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
                              className="inline-flex items-center gap-1 text-xs font-medium text-brand-muted hover:text-brand-terra transition-colors"
                            >
                              {ui.storyCards.live}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                          <button
                            onClick={() => openCaseStudy(cs.id)}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-terra hover:text-brand-terra-hover transition-colors cursor-pointer"
                          >
                            {ui.storyCards.readCaseStudy}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {chapter.quote && (
              <blockquote className="mt-8 border-l-2 border-brand-terra pl-4 py-2 bg-brand-light/60 rounded-r-lg p-4">
                <p className="italic text-brand-ink text-sm sm:text-base leading-relaxed mb-2">
                  &ldquo;{chapter.quote.message}&rdquo;
                </p>
                <footer className="text-xs text-brand-muted">
                  <span className="font-medium text-brand-ink">{chapter.quote.from}</span>
                  {chapter.quote.role && (
                    <span> — {chapter.quote.role}</span>
                  )}
                </footer>
              </blockquote>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
