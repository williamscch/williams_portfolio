import { Mail, MapPin, Clock } from "lucide-react";
import { usePortfolioContext } from "@/context/portfolio";

export default function Contact() {
  const { data } = usePortfolioContext();
  const { email, emailHref, location, availability, social } = data.connect;

  return (
    <section id="connect" className="bg-[#FAF7F2] px-6 py-20 sm:px-12 md:px-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#19191C] mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-[#4A4A52] leading-relaxed text-sm sm:text-base max-w-prose mb-10">
          Always open to a conversation about engineering, consulting, or interesting problems.
        </p>

        <div className="space-y-4 mb-10">
          <a
            href={emailHref}
            className="flex items-center gap-3 text-[#19191C] hover:text-[#C25E3E] transition-colors group"
          >
            <Mail className="w-4 h-4 text-[#C25E3E]" />
            <span className="text-sm sm:text-base font-medium">{email}</span>
          </a>
          <div className="flex items-center gap-3 text-[#4A4A52]">
            <MapPin className="w-4 h-4 text-[#C25E3E]" />
            <span className="text-sm sm:text-base">{location}</span>
          </div>
          <div className="flex items-center gap-3 text-[#4A4A52]">
            <Clock className="w-4 h-4 text-[#C25E3E]" />
            <span className="text-sm sm:text-base">{availability}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {social.map((account) => {
            const Icon = account.icon;
            return (
              <a
                key={account.name}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#DDD5CA] bg-[#F4EFEA] px-4 py-2 text-sm font-medium text-[#19191C] hover:border-[#C25E3E]/60 hover:bg-[#C25E3E]/5 transition-all"
              >
                <Icon className="w-4 h-4" />
                {account.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
