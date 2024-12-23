import image from "@/assets/me_close.jpg";
import { usePortfolioContext } from "@/context/portfolio";
import { Button } from "@/ui/button";

export default function About() {
  const { about, connect } = usePortfolioContext();

  return (
    <section
      id="about"
      className="lg:min-h-screen md:mx-6 lg:mx-24 px-6 md:px-0 py-10 md:py-24"
    >
      <div className="mb-7 px-4 text-start">
        <h2 className="font-medium text-3xl md:text-4xl mb-5">About Me</h2>
        <hr className="w-16 m-0 h-1 bg-primary rounded-sm" />
      </div>

      <div className="px-4 leading-relaxed">
        <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-lg overflow-hidden float-right m-2 md:m-4">
          <img src={image} alt="image" className="object-cover h-full" />
        </div>

        <p className="font-light text-muted-foreground">{about.start}</p>

        <p className="font-light text-muted-foreground my-4">{about.end}</p>

        <p className="font-light text-muted-foreground my-4">{about.cta}</p>

        <Button type="button" size="lg">
          <a href={connect.links.resume} target="_blank" rel="noreferrer">
            My Resume
          </a>
        </Button>
      </div>
    </section>
  );
}
