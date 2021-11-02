import { InternalServerError } from '../../../utils/api';
import { Film, FilmAPI } from '../types';
import { filmDeserializer } from './serializers';

/**
 * Get information about a specific film.
 *
 * @param url {string}: Film API url
 */
async function getOneFilm(url: string): Promise<Film> {
  const response = await fetch(url);

  if (response.ok) {
    try {
      const data: FilmAPI = await response.json();

      return filmDeserializer(data);
    } catch (err) {
      throw new InternalServerError();
    }
  }

  switch (response.status) {
    case 404:
      throw new Error('Film not found.');
    default:
      throw new Error(response.statusText);
  }
}

export { getOneFilm };
