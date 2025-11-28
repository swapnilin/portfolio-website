export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: 'work' | 'education';
  logo?: string; // Optional company logo URL
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  details?: {
    problem?: string;
    solution?: string;
    features?: string[];
    impact?: string;
  };
}