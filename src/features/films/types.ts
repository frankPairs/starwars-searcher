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

export type { Film, FilmAPI };
