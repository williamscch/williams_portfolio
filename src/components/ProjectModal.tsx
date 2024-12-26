import { Eye } from "lucide-react";
import { Button } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/ui/dialog";
import { Badge } from "@/ui/badge";

interface ProjectModalProps {
  project: {
    name: string;
    description: string;
    skills: string[];
    live?: string;
    source?: string;
    media?: string[];
  };
}

export default function ProjectModal({ project }: ProjectModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="gap-2">
          <Eye className="w-4 h-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl h-full max-h-[80vh] flex flex-col bg-secondary">
        <DialogHeader className="font-semibold text-accent-foreground">
          {project.name}
        </DialogHeader>
        <div className="h-full grid lg:grid-cols-2 gap-4">
          <div className="w-full flex flex-col gap-2">
            <p className="text-secondary-foreground">{project.description}</p>
            <div className="flex flex-col gap-4 my-2">
              <h3>Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((e, i) => (
                  <Badge
                    key={i}
                    variant="default"
                    className="font-normal text-sm bg-slate-600"
                  >
                    {e}
                  </Badge>
                ))}
              </div>
            </div>
            <hr className="bg-primary my-2" />
            <div className="w-full flex flex-col items-start gap-2">
              {project.live ? (
                <div>
                  <h3>Live:</h3>
                  <Button variant="link" className="p-0 text-start h-fit">
                    {project.live}
                  </Button>
                </div>
              ) : null}
              {project.source ? (
                <div>
                  <h3>Src:</h3>
                  <Button variant="link" className="p-0 text-start h-fit">
                    {project.source}
                  </Button>
                </div>
              ) : null}
            </div>
          </div>

          <div className="max-h-[90%] overflow-y-scroll w-full flex flex-col gap-2">
            {project.media && project.media.length > 0
              ? project.media.map((e, i) => (
                  <div className="relative w-full aspect-video">
                    <img
                      key={i}
                      src={e}
                      alt="project-img"
                      className="object-contain"
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
