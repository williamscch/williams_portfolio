import { Code2, Brain, Cloud } from "lucide-react";
import { usePortfolioContext } from "@/context/portfolio";

const groupIcons = [Code2, Brain, Cloud];

export default function Toolkit() {
  const { data } = usePortfolioContext();

  return (
    <section id="toolkit" className="bg-brand-warm px-6 py-20 sm:px-12 md:px-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-ink mb-12">
          Curated Toolkit
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {data.toolkit.map((group, i) => {
            const Icon = groupIcons[i] ?? Code2;
            return (
              <div
                key={group.groupName}
                className="rounded-xl border border-brand-border bg-brand-cream p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-4 h-4 text-brand-terra" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-brand-terra">
                    {group.groupName}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-brand-muted flex items-center gap-2"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-brand-border" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
