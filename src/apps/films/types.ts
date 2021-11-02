import { FetchStatus } from '../../typedefs/enums';

interface FilmState {
  data: { [filmUrl: string]: Film };
  byCharacter: { [characterUrl: string]: string[] };
  status: FetchStatus;
  error: string | null;
}

interface Film {
  title: string;
  url: string;
  openingCrawl: string;
  releaseDate: string;
  characters: string[];
}

interface FilmAPI {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
}

export { FilmState, Film, FilmAPI };
