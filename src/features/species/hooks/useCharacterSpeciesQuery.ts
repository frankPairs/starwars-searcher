import { useQuery } from '@tanstack/react-query';

import type { Character } from '../../characters/types';
import { getOneSpecies } from '../api';

function useCharacterSpeciesQuery(character: Character) {
  const {
    data = [],
    status,
    error,
  } = useQuery({
    queryKey: ['species', character.url],
    queryFn: () => Promise.all(character.species.map((speciesUrl) => getOneSpecies(speciesUrl))),
    staleTime: Infinity,
  });

  return { characterSpecies: data, status, error };
}

export { useCharacterSpeciesQuery };
