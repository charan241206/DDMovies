import { Film, TeamMember, TimelineEvent } from './types';

export const LOGO_URL = 'https://yt3.googleusercontent.com/WpUaEz_O5RWr5Y9KvuWkRHS_4pSE4uiMBXe65GgdZPCWpKttw-HFDWUnA-J9MCDlpHdBMWMo=s900-c-k-c0x00ffffff-no-rj';

export const FILMS: Film[] = [
  {
    id: '1',
    title: 'Made For Each Other',
    youtubeId: 'qgLcvjyhADQ',
    category: 'Short Film',
    description: 'A heartwarming tale of destiny and love found in unexpected places.',
    thumbnail: 'https://img.youtube.com/vi/qgLcvjyhADQ/maxresdefault.jpg'
  },
  {
    id: '2',
    title: 'Jaanu Tho Nenu',
    youtubeId: 'qgLcvjyhADQ', // Note: Using ID from prompt, duplicate of above. Assuming intentional or placeholder.
    category: 'Short Film',
    description: 'A romantic journey exploring the nuances of modern relationships.',
    thumbnail: 'https://img.youtube.com/vi/qgLcvjyhADQ/maxresdefault.jpg'
  },
  {
    id: '3',
    title: 'MEN & WOMEN (Bhanu)',
    youtubeId: 'ObeeJ4YlMSQ',
    category: 'Short Film',
    description: 'A comedic and insightful look into the contrasting worlds of men and women.',
    thumbnail: 'https://img.youtube.com/vi/ObeeJ4YlMSQ/maxresdefault.jpg'
  },
  {
    id: '4',
    title: 'MEN & WOMEN 2 | Part-3',
    youtubeId: '4Dw2YMHGddM',
    category: 'Short Film',
    description: 'The saga continues with more hilarity and relatable life situations.',
    thumbnail: 'https://img.youtube.com/vi/4Dw2YMHGddM/maxresdefault.jpg'
  },
  {
    id: '5',
    title: 'Matala Mayalo',
    youtubeId: 'Fe3Og3SP270',
    category: 'Short Film',
    description: 'Words can be magical, or they can be a maze. A gripping narrative.',
    thumbnail: 'https://img.youtube.com/vi/Fe3Og3SP270/maxresdefault.jpg'
  },
  {
    id: '6',
    title: 'Satyam Sundharam',
    youtubeId: 'D6U_0t7wrXg',
    category: 'Short Film',
    description: 'Truth is beautiful. A dramatic exploration of honesty and integrity.',
    thumbnail: 'https://img.youtube.com/vi/D6U_0t7wrXg/maxresdefault.jpg'
  },
  {
    id: '7',
    title: 'Cafe Kahani',
    youtubeId: 'eIdMH3svbIs',
    category: 'Short Film',
    description: 'Every coffee cup has a story. Conversations that change lives.',
    thumbnail: 'https://img.youtube.com/vi/eIdMH3svbIs/maxresdefault.jpg'
  },
  {
    id: '8',
    title: 'Oye Scooty',
    youtubeId: 'k9i1yoBsBPk',
    category: 'Web Series',
    description: 'A full movie web series capturing the essence of youth and freedom.',
    thumbnail: 'https://img.youtube.com/vi/k9i1yoBsBPk/maxresdefault.jpg'
  },
  {
    id: '9',
    title: 'Magical Love | Part 1',
    youtubeId: 'jHlNofz1lNQ',
    category: 'Web Series',
    description: 'The beginning of an enchanting love story filled with twists.',
    thumbnail: 'https://img.youtube.com/vi/jHlNofz1lNQ/maxresdefault.jpg'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'G.D Dinesh',
    role: 'Producer',
    // Removed grayscale to make the 3D icon look more vibrant
    image: 'https://picsum.photos/300/300?random=1'
  },
  {
    name: 'Krishna S Rama',
    role: 'Director',
    image: 'https://picsum.photos/300/300?random=2'
  },
  {
    name: 'Pavan Kalyan Raghavan',
    role: 'Director',
    image: 'https://picsum.photos/300/300?random=3'
  },
  {
    name: 'Main Cast',
    role: 'Artists',
    image: 'https://picsum.photos/300/300?random=4'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2020',
    title: 'Inception',
    description: 'DD Movies Entertainment was founded with a vision to redefine Telugu short film storytelling.'
  },
  {
    year: '2021',
    title: 'First Viral Hit',
    description: 'Released our first major web series gaining over 1 million views.'
  },
  {
    year: '2023',
    title: 'Award Recognition',
    description: 'Received accolades for "Best Screenplay" in regional short film festivals.'
  },
  {
    year: '2024',
    title: 'Global Reach',
    description: 'Expanded audience base internationally with diverse content genres.'
  }
];

export const CONTACT_EMAIL = 'ddmovies441@gmail.com';
export const SOCIAL_LINKS = {
  youtube: 'https://youtube.com',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com'
};