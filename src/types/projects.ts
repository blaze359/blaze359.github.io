export interface Project {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  problem: string;
  solution: string;
  repository: string;
  url: string[];
  images: string[];
  technologies: string[];
}

export interface ProjectsData {
  projects: Project[];
}
