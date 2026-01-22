import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="h-full flex flex-col">
      {project.image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-[var(--muted)] flex items-center justify-center">
          {project.image.startsWith("/") ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="text-[var(--muted-foreground)] text-sm">
              {project.title}
            </div>
          )}
        </div>
      )}
      
      <div className="flex-1 flex flex-col space-y-3 sm:space-y-4">
        <div>
          <h3 className="text-h3 font-semibold text-[var(--foreground)] mb-2 text-base sm:text-lg">
            {project.title}
          </h3>
          <p className="text-body text-[var(--muted-foreground)] text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {project.url && (
          <div className="mt-auto pt-4">
            <Button href={project.url} variant="outline" size="sm">
              View Project
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
