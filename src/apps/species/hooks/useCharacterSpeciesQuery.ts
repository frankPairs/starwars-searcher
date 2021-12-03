import { QueryStatus, useQuery } from 'react-query';

import { Character } from '../../characters/types';
import { Species } from '../types';
import { getOneSpecies } from '../api';

interface State {
  characterSpecies: Species[];
  status: QueryStatus;
  error: unknown;
}

function useCharacterSpeciesQuery(character: Character): State {
  const {
    data = [],
    status,
    error,
  } = useQuery(
    ['species', character.url],
    () => Promise.all(character.species.map((speciesUrl) => getOneSpecies(speciesUrl))),
    { staleTime: Infinity },
  );

  return { characterSpecies: data, status, error };
}

export { useCharacterSpeciesQuery };
