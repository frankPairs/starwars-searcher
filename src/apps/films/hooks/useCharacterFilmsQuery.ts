import { QueryStatus, useQuery } from 'react-query';

import { Character } from '../../characters/types';
import { getOneFilm } from '../api';
import { Film } from '../types';

interface State {
  characterFilms: Film[];
  status: QueryStatus;
  error: unknown;
}

function useCharacterFilmsQuery(character: Character): State {
  const {
    data = [],
    status,
    error,
  } = useQuery(
    ['films', character.url],
    () => Promise.all(character.films.map((filmUrl) => getOneFilm(filmUrl))),
    { staleTime: Infinity },
  );

  return { characterFilms: data, status, error };
}

export { useCharacterFilmsQuery };
