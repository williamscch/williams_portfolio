import { ExternalLink, X } from "lucide-react";
import { usePortfolioContext } from "@/context/portfolio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/ui/dialog";

export default function CaseStudyModal() {
  const { activeCaseStudy, closeCaseStudy, locale, data } = usePortfolioContext();
  const { close, liveSite } = data.ui.caseStudyModal;

  if (!activeCaseStudy) return null;

  const {
    title,
    tagline,
    client,
    role,
    timeframe,
    challenge,
    architecture,
    impact,
    tech,
    image,
    live,
    testimonials,
  } = activeCaseStudy;

  return (
    <Dialog open={!!activeCaseStudy} onOpenChange={(open) => !open && closeCaseStudy()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-brand-cream border-brand-border p-0 gap-0 rounded-2xl">
        {/* Close button */}
        <button
          onClick={closeCaseStudy}
          className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-brand-ink/80 text-brand-cream flex items-center justify-center hover:bg-brand-ink transition-colors"
          aria-label={close}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero image */}
        {image && (
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent" />
          </div>
        )}

        {/* Header */}
        <DialogHeader className="p-6 pb-0">
          {(client || timeframe) && (
            <div className="flex items-center gap-3 mb-3">
              {client && (
                <span className="font-mono text-xs uppercase tracking-widest text-brand-terra">
                  {client}
                </span>
              )}
              {timeframe && (
                <span className="text-xs text-brand-muted">
                  {timeframe}
                </span>
              )}
            </div>
          )}
          <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-ink">
            {title}
          </DialogTitle>
          {tagline && (
            <DialogDescription className="text-base text-brand-muted mt-2 leading-relaxed">
              {tagline}
            </DialogDescription>
          )}
        </DialogHeader>

        {/* Role + Tech + Live */}
        {(role || tech?.length || live) && (
          <div className="px-6 py-4 flex flex-wrap items-center gap-3">
            {role && (
              <span className="text-sm font-medium text-brand-ink">
                {role}
              </span>
            )}
            {tech?.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-xs font-mono uppercase tracking-wider text-brand-muted bg-brand-warm px-2 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-brand-terra hover:text-brand-terra-hover transition-colors"
              >
                {liveSite}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}

        {/* Narrative sections */}
        <div className="px-6 pb-6 space-y-4">
          {challenge && (
            <div className="bg-brand-warm rounded-xl p-5">
              <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
                {challenge}
              </p>
            </div>
          )}

          {architecture && (
            <p className="text-brand-muted leading-relaxed text-sm sm:text-base px-1">
              {architecture}
            </p>
          )}

          {impact && (
            <div className="bg-brand-warm rounded-xl p-5">
              <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
                {impact}
              </p>
            </div>
          )}

          {/* Full tech stack */}
          {tech && tech.length > 4 && (
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono uppercase tracking-wider text-brand-ink bg-brand-warm border border-brand-border px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Client testimonials */}
          {testimonials && testimonials.length > 0 && (
            <div className="space-y-3 mt-4">
              {testimonials.map((t, i) => (
                <blockquote
                  key={`${t.from}-${i}`}
                  className="border-l-2 border-brand-terra pl-4 py-2 bg-brand-light/60 rounded-r-lg"
                >
                  <p className="italic text-brand-ink text-sm sm:text-base leading-relaxed mb-2">
                    &ldquo;{locale === "es" && t.messageEs ? t.messageEs : t.message}&rdquo;
                  </p>
                  <footer className="text-xs text-brand-muted">
                    <span className="font-medium text-brand-ink">{t.from}</span>
                    {t.role && <span> — {t.role}</span>}
                  </footer>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
