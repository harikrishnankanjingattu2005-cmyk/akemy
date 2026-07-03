export type Page = 'home' | 'services' | 'portfolio' | 'about' | 'process' | 'contact' | '404' | 'steve' | 'fidha';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  client: string;
  servicesUsed: string[];
  technology: string[];
  results: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  longDescription: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface WhyCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
