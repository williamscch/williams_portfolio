import { usePortfolioContext } from "@/context/portfolio";
import ProjectCard from "./ProjectCard";
import { cn } from "@/utils/cn";

export default function Portfolio() {
  const { projects } = usePortfolioContext();
  return (
    <section
      id="portfolio"
      className="md:mx-6 lg:mx-24 px-6 md:px-0 py-10 md:py-24"
    >
      <div className="mb-7 px-4 text-center">
        <h2 className="font-medium text-3xl md:text-4xl mb-5">My Portfolio</h2>
        <hr className="w-3/4 m-0 h-1 bg-primary rounded-sm" />
      </div>
      <div
        className={cn(
          "w-full mt-3 md:mt-7 grid gap-6 xl:gap-8 2xl:gap-10 4xl:gap-12 place-content-center md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4"
        )}
      >
        {projects?.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>
    </section>
  );
}
