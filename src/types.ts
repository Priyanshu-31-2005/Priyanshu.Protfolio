export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  results: string[];
  imageUrl: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export type ExperienceType = 'experience' | 'education' | 'certification' | 'startup';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: ExperienceType;
  description: string;
  tags?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  review: string;
  imageUrl: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: { name: string; level?: string; icon?: string }[];
}
