
export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'ai' | 'islamic' | 'web' | 'tools';
  categoryDisplay: string;
  imageUrl: string;
  tech: string[];
  liveUrl: string;
}

export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
    featuresTitle: string;
    features: string[];
    portfolio?: {
        title: string;
        items: string[];
    };
    result?: string;
}
