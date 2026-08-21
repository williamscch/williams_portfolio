import { Mail, MapPin, Clock } from "lucide-react";
import { usePortfolioContext } from "@/context/portfolio";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { Button } from "@/ui/button";

export default function Contact() {
  const { data } = usePortfolioContext();
  const { email, emailHref, location, availability, social } = data.connect;
  const { headline, intro, namePlaceholder, emailPlaceholder, messagePlaceholder, sendButton } = data.ui.contact;

  return (
    <section id="connect" className="bg-brand-cream px-6 py-20 sm:px-12 md:px-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-ink mb-4">
          {headline}
        </h2>
        <p className="text-brand-muted leading-relaxed text-sm sm:text-base max-w-prose mb-10">
          {intro}
        </p>

        <form
          action="https://formspree.io/f/xlezzzro"
          method="POST"
          className="space-y-4 mb-10"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              type="text"
              name="name"
              required
              maxLength={50}
              placeholder={namePlaceholder}
              className="bg-brand-warm border-brand-border focus:ring-brand-terra"
            />
            <Input
              type="email"
              name="email"
              required
              placeholder={emailPlaceholder}
              className="bg-brand-warm border-brand-border focus:ring-brand-terra"
            />
          </div>
          <Textarea
            name="message"
            maxLength={500}
            required
            placeholder={messagePlaceholder}
            className="bg-brand-warm border-brand-border focus:ring-brand-terra min-h-[120px]"
          />
          <Button
            type="submit"
            className="bg-brand-ink text-brand-cream hover:bg-brand-terra transition-colors"
          >
            {sendButton}
          </Button>
        </form>

        <div className="space-y-4 mb-10">
          <a
            href={emailHref}
            className="flex items-center gap-3 text-brand-ink hover:text-brand-terra transition-colors group"
          >
            <Mail className="w-4 h-4 shrink-0 text-brand-terra" />
            <span className="text-sm sm:text-base font-medium">{email}</span>
          </a>
          <div className="flex items-center gap-3 text-brand-muted">
            <MapPin className="w-4 h-4 shrink-0 text-brand-terra" />
            <span className="text-sm sm:text-base">{location}</span>
          </div>
          <div className="flex items-center gap-3 text-brand-muted">
            <Clock className="w-4 h-4 shrink-0 text-brand-terra" />
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
                className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-warm px-4 py-2 text-sm font-medium text-brand-ink hover:border-brand-terra/60 hover:bg-brand-terra/5 transition-all"
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
