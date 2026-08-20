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
        className="max-w-3xl max-h-[85vh] overflow-y-auto bg-[#FAF7F2] border-[#DDD5CA] p-0 gap-0"
      >
        <DialogHeader className="p-6 pb-0">
          {(client || timeframe) && (
            <div className="flex items-center gap-3 mb-3">
              {client && (
                <span className="font-mono text-xs uppercase tracking-widest text-[#C25E3E] bg-[#C25E3E]/10 px-3 py-1 rounded-full">
                  {client}
                </span>
              )}
              {timeframe && (
                <span className="font-mono text-xs uppercase tracking-widest text-[#4A4A52]">
                  {timeframe}
                </span>
              )}
            </div>
          )}
          <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-[#19191C]">
            {title}
          </DialogTitle>
          {tagline && (
            <DialogDescription className="text-base text-[#4A4A52] mt-1">
              {tagline}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="px-6 py-4">
          {(role || tech?.length) && (
            <div className="flex flex-wrap items-center gap-3 py-3 border-b border-[#DDD5CA]">
              {role && (
                <span className="text-sm font-medium text-[#19191C]">
                  {role}
                </span>
              )}
              {role && tech?.length && (
                <span className="text-[#DDD5CA]">·</span>
              )}
              {tech?.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono uppercase tracking-wider text-[#4A4A52] bg-[#F4EFEA] px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#C25E3E] hover:text-[#A84E33] transition-colors"
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
              className="w-full rounded-lg object-cover max-h-72 border border-[#DDD5CA]"
            />
          </div>
        )}

        <div className="px-6 pb-6 space-y-5">
          {challenge && (
            <div className="bg-[#F4EFEA] rounded-xl p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#C25E3E] mb-2">
                The Challenge
              </h3>
              <p className="text-[#4A4A52] leading-relaxed text-sm sm:text-base max-w-prose">
                {challenge}
              </p>
            </div>
          )}

          {architecture && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#C25E3E] mb-2">
                Architecture & Build
              </h3>
              <p className="text-[#4A4A52] leading-relaxed text-sm sm:text-base max-w-prose">
                {architecture}
              </p>
            </div>
          )}

          {impact && (
            <div className="bg-[#F4EFEA] rounded-xl p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#C25E3E] mb-2">
                Impact & Outcome
              </h3>
              <p className="text-[#4A4A52] leading-relaxed text-sm sm:text-base max-w-prose">
                {impact}
              </p>
            </div>
          )}

          {tech && tech.length > 4 && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#C25E3E] mb-2">
                Full Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono uppercase tracking-wider text-[#19191C] bg-[#F4EFEA] border border-[#DDD5CA] px-3 py-1 rounded-full"
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
