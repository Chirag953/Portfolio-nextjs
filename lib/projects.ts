import { Project } from "@/types/project";
import projectsData from "@/data/projects.json";

export function getProjects(): Project[] {
  try {
    return projectsData as Project[];
  } catch (error) {
    console.error("Error loading projects:", error);
    return [];
  }
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}
