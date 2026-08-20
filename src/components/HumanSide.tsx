import { usePortfolioContext } from "@/context/portfolio";

export default function HumanSide() {
  const { data } = usePortfolioContext();
  const { headline, person, aiWorkflow, mentorship, certifications } = data.humanSide;

  return (
    <section id="beyond-code" className="bg-[#FAF7F2] px-6 py-20 sm:px-12 md:px-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#19191C] mb-12">
          {headline}
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#C25E3E] mb-3">
              The Person Behind the Code
            </h3>
            <p className="text-[#4A4A52] leading-relaxed text-sm sm:text-base max-w-prose">
              {person}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#C25E3E] mb-3">
              AI-Augmented Workflow
            </h3>
            <p className="text-[#4A4A52] leading-relaxed text-sm sm:text-base max-w-prose mb-6">
              {aiWorkflow}
            </p>

            {certifications.length > 0 && (
              <ul className="space-y-1.5">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-2 text-xs text-[#4A4A52]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C25E3E]" />
                    {cert}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#C25E3E] mb-3">
            Mentorship & Coaching
          </h3>
          <p className="text-[#4A4A52] leading-relaxed text-sm sm:text-base max-w-prose">
            {mentorship}
          </p>
        </div>
      </div>
    </section>
  );
}
