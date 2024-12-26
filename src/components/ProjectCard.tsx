import { Card, CardHeader, CardTitle } from "@/ui/card";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    skills: string[];
    live?: string;
    source?: string;
    media?: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="rounded-2xl border-none h-full shadow-2xl overflow-hidden max-w-full">
      <div className="relative w-full aspect-video bg-muted/80 overflow-hidden">
        {project.media && project.media.length > 0 ? (
          <img
            src={project.media[0]}
            alt="project-img"
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>

      <CardHeader className="flex flex-row justify-between lg:items-center gap-2 p-5">
        <CardTitle className="font-medium hover:underline text-base lg:text-lg">
          {project.name}
        </CardTitle>
        <ProjectModal project={project} />
      </CardHeader>
    </Card>
  );
}
