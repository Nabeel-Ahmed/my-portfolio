export interface Employment {
  position: string;
  company: string;
  url: string;
  branding: string;
  location: string;
  startDate: string;
  endDate: string;
  languages: string[];
  frameworks: string[];
  tech: string[];
  overview?: string;
  projects: Project[];
}

export interface Project {
  name: string;
  description: string;
  languages: string[];
  tech?: string[];
  link?: string;
  imageUrl?: string;
  altText?: string | undefined;
  companyName?: string;
  url?: string;
}
