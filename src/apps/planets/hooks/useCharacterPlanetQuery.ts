import { Planet } from '../types';
import { Character } from '../../characters/types';
import { QueryStatus, useQuery } from 'react-query';
import { getOnePlanet } from '../api';

interface State {
  characterPlanet: Planet | null;
  status: QueryStatus;
  error: unknown;
}

function useCharacterPlanetQuery(character: Character): State {
  const {
    data = null,
    status,
    error,
  } = useQuery(['planets', character.homeWorld], () => getOnePlanet(character.homeWorld), {
    staleTime: Infinity,
  });

  return { characterPlanet: data, status, error };
}

export { useCharacterPlanetQuery };
