import { usePortfolioContext } from "@/context/portfolio";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/ui/carousel";

export default function Testimonials() {
  const { testimonials, connect } = usePortfolioContext();
  return (
    <section id="testimonials" className="w-full py-10 md:py-24 bg-slate-600">
      <div className="mb-7 text-center">
        <h2 className="font-medium text-3xl md:text-4xl mb-5 text-white italic">
          testimonials
        </h2>
        <hr className="w-3/4 m-0 h-1 bg-white rounded-sm" />
      </div>
      <Carousel
        className="w-full"
        autoplay={true}
        autoplayDelay={4000}
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="h-auto min-h-96">
          {testimonials.map((t, index) => (
            <CarouselItem
              key={index}
              className="basis-4/5 md:basis-1/2 4xl:basis-1/3 cursor-grab active:cursor-grabbing shadow-md"
            >
              <Card className="h-full bg-muted">
                <CardHeader>
                  <h3 className="text-sm md:text-base text-accent-foreground">
                    ~{t.from}
                  </h3>
                  <span className="text-sm md:text-base italic">{t.role}</span>
                </CardHeader>
                <CardContent>
                  <a
                    href={connect.links.recommendations}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base text-muted-foreground italic"
                  >
                    "{t.message}"
                  </a>
                  <div></div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
