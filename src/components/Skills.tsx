import { useState } from "react";
import { usePortfolioContext } from "@/context/portfolio";
import { cn } from "@/utils/cn";

export default function Skills() {
  const { skills } = usePortfolioContext();
  const [indexHovered, setIndexHovered] = useState<number | undefined>(
    undefined
  );

  return (
    <section
      id="skills"
      className="md:mx-6 lg:mx-24 px-6 md:px-0 py-10 md:py-24"
    >
      <div className="mb-7 px-4 text-center">
        <h2 className="font-medium text-3xl md:text-4xl mb-5">My Skills</h2>
        <hr className="w-3/4 m-0 h-1 bg-primary rounded-sm" />
      </div>
      <div className="flex flex-wrap gap-4 lg:gap-7 items-center justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-muted p-3 rounded-md shadow-md h-24 w-24 lg:h-32 lg:w-32 cursor-pointer hover:shadow-lg ease-out duration-300 hover:scale-95"
            onMouseEnter={() => setIndexHovered(index)}
            onMouseLeave={() => setIndexHovered(undefined)}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className={cn(
                "h-12 w-12 lg:w-16 lg:h-16 grayscale transition-all duration-300",
                indexHovered === index ? "grayscale-0" : ""
              )}
            />
            <p className="mt-2 text-sm lg:text-base font-medium text-muted-foreground">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
