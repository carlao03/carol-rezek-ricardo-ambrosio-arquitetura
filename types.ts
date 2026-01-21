export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  challenge?: string;
  solution?: string;
  additionalImages?: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: 'home' | 'building' | 'layout' | 'pen';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  chatId: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image?: string;
}