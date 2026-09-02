export interface ServiceItem {
  id: string;
  title: string;
  hindiTitle?: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  image: string;
  deliverables: string[];
  timeline: string;
  idealFor: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Living Rooms' | 'Bedrooms' | 'Modular Kitchens' | 'Luxury Homes' | 'Commercial Spaces' | 'Office Interiors' | 'Renovation Projects' | string;
  location: string;
  area: string;
  completionYear: string;
  image: string;
  beforeImage?: string;
  galleryImages: string[];
  description: string;
  features: string[];
  style: string;
  materials: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  review: string;
  projectType: string;
  date: string;
  avatar?: string;
  verified: boolean;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  hindiTitle: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Pricing' | 'Timeline' | 'Process' | 'Services' | 'Turnkey' | 'Renovation' | string;
}

export interface Room3DModel {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  styles: {
    id: string;
    name: string;
    image: string;
    palette: string[];
    materials: string[];
    description: string;
    features: string[];
  }[];
}
