import { usePortfolioContext } from "@/context/portfolio";

export default function HumanSide() {
  const { data } = usePortfolioContext();
  const { headline, person, aiWorkflow, mentorship, certifications } = data.humanSide;
  const { personTitle, aiWorkflowTitle, mentorshipTitle } = data.ui.humanSide;

  return (
    <section id="beyond-code" className="bg-brand-cream px-6 py-20 sm:px-12 md:px-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-ink mb-12">
          {headline}
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-brand-terra mb-3">
              {personTitle}
            </h3>
            <p className="text-brand-muted leading-relaxed text-sm sm:text-base max-w-prose">
              {person}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-brand-terra mb-3">
              {aiWorkflowTitle}
            </h3>
            <p className="text-brand-muted leading-relaxed text-sm sm:text-base max-w-prose mb-6">
              {aiWorkflow}
            </p>

            {certifications.length > 0 && (
              <ul className="space-y-1.5">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-2 text-xs text-brand-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-terra" />
                    {cert}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-mono text-xs uppercase tracking-widest text-brand-terra mb-3">
            {mentorshipTitle}
          </h3>
          <p className="text-brand-muted leading-relaxed text-sm sm:text-base max-w-prose">
            {mentorship}
          </p>
        </div>
      </div>
    </section>
  );
}
