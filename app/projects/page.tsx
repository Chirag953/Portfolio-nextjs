import { Heading } from "@/components/ui/heading";
import { ProjectCard } from "@/components/project-card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Navigation } from "@/components/navigation";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects - Chirag Dutta",
  description: "Explore my portfolio of web development projects and applications.",
};

export default function Projects() {
  const projects = getProjects();

  return (
    <main className="min-h-screen px-4 py-20 pt-24 sm:pt-20">
      <Navigation />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <section className="text-center space-y-4 animate-fade-in">
          <Heading level="h1">My Projects</Heading>
          <p className="text-body-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            A collection of projects I've built, showcasing my skills and
            experience in web development.
          </p>
        </section>

        {projects.length === 0 ? (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-body-lg text-[var(--muted-foreground)]">
              No projects available at the moment.
            </p>
          </div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
