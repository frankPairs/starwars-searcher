import { useQuery } from '@tanstack/react-query';

import type { Character } from '../../characters/types';
import { getOneFilm } from '../api';

function useCharacterFilmsQuery(character: Character) {
  const { data = [], ...queryData } = useQuery({
    queryKey: ['films', character.url],
    queryFn: () => Promise.all(character.films.map((filmUrl) => getOneFilm(filmUrl))),
    staleTime: Infinity,
  });

  return { characterFilms: data, ...queryData };
}

export { useCharacterFilmsQuery };
