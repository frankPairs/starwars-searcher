import { useQuery } from '@tanstack/react-query';

import type { Character } from '../../characters/types';

import { getOnePlanet } from '../api';

function useCharacterPlanetQuery(character: Character) {
  const { data = null, ...queryData } = useQuery({
    queryKey: ['planets', character.homeWorld],
    queryFn: () => getOnePlanet(character.homeWorld),
    staleTime: Infinity,
  });

  return { characterPlanet: data, ...queryData };
}

export { useCharacterPlanetQuery };
