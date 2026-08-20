import { ExternalLink } from "lucide-react";
import { usePortfolioContext } from "@/context/portfolio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/ui/dialog";

export default function CaseStudyModal() {
  const { activeCaseStudy, closeCaseStudy } = usePortfolioContext();

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
  } = activeCaseStudy;

  return (
    <Dialog open={!!activeCaseStudy} onOpenChange={(open) => !open && closeCaseStudy()}>
      <DialogContent
        className="max-w-3xl max-h-[85vh] overflow-y-auto bg-brand-cream border-brand-border p-0 gap-0"
      >
        <DialogHeader className="p-6 pb-0">
          {(client || timeframe) && (
            <div className="flex items-center gap-3 mb-3">
              {client && (
                <span className="font-mono text-xs uppercase tracking-widest text-brand-terra bg-brand-terra/10 px-3 py-1 rounded-full">
                  {client}
                </span>
              )}
              {timeframe && (
                <span className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                  {timeframe}
                </span>
              )}
            </div>
          )}
          <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-ink">
            {title}
          </DialogTitle>
          {tagline && (
            <DialogDescription className="text-base text-brand-muted mt-1">
              {tagline}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="px-6 py-4">
          {(role || tech?.length) && (
            <div className="flex flex-wrap items-center gap-3 py-3 border-b border-brand-border">
              {role && (
                <span className="text-sm font-medium text-brand-ink">
                  {role}
                </span>
              )}
              {role && tech?.length && (
                <span className="text-brand-border">·</span>
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
                  Live Site
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </div>

        {image && (
          <div className="px-6">
            <img
              src={image}
              alt={title}
              className="w-full rounded-lg object-cover max-h-72 border border-brand-border"
            />
          </div>
        )}

        <div className="px-6 pb-6 space-y-5">
          {challenge && (
            <div className="bg-brand-warm rounded-xl p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-brand-terra mb-2">
                The Challenge
              </h3>
              <p className="text-brand-muted leading-relaxed text-sm sm:text-base max-w-prose">
                {challenge}
              </p>
            </div>
          )}

          {architecture && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-brand-terra mb-2">
                Architecture & Build
              </h3>
              <p className="text-brand-muted leading-relaxed text-sm sm:text-base max-w-prose">
                {architecture}
              </p>
            </div>
          )}

          {impact && (
            <div className="bg-brand-warm rounded-xl p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-brand-terra mb-2">
                Impact & Outcome
              </h3>
              <p className="text-brand-muted leading-relaxed text-sm sm:text-base max-w-prose">
                {impact}
              </p>
            </div>
          )}

          {tech && tech.length > 4 && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-brand-terra mb-2">
                Full Tech Stack
              </h3>
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
