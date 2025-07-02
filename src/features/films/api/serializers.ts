import type { Film, FilmAPI } from '../types';

function filmDeserializer({ title, url, opening_crawl, release_date, characters }: FilmAPI): Film {
  return {
    title,
    url,
    openingCrawl: opening_crawl,
    releaseDate: release_date,
    characters,
  };
}

export { filmDeserializer };
