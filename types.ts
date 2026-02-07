export interface Film {
  id: string;
  title: string;
  youtubeId: string;
  category: 'Short Film' | 'Web Series' | 'Feature Film';
  description: string;
  thumbnail?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
