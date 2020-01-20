import { Author } from './author';

export interface Course {
  id: string;
  name: string;
  date: string;
  length: number;
  isTopRated: boolean;
  description: string;
  authors: Author;
}
