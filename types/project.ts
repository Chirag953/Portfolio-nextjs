export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  techStack?: string[];
  url?: string;
  date?: string;
  featured?: boolean;
}
