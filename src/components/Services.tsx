import { usePortfolioContext } from "@/context/portfolio";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";

export default function Services() {
  const { services } = usePortfolioContext();
  return (
    <section
      id="services"
      className="md:mx-6 lg:mx-24 px-6 md:px-0 py-10 md:py-24"
    >
      <div className="mb-7 px-4 text-center">
        <h2 className="font-medium text-3xl md:text-4xl mb-5">My Services</h2>
        <hr className="w-3/4 m-0 h-1 bg-primary rounded-sm" />
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:gap-8">
        <Accordion type="single" collapsible className="w-full">
          {services?.map((e, i) => (
            <AccordionItem value={e.name + e.id} key={e.id + i}>
              <AccordionTrigger>
                <div className="flex items-center gap-4">
                  <e.icon className="text-primary w-10 h-10" />
                  <h3 className="font-medium text-start">{e.name}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc flex flex-col gap-1">
                  {e.bullets?.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
