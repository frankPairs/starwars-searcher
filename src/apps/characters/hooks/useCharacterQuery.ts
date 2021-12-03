import { QueryStatus, useQuery } from 'react-query';

import { Character } from '../types';
import { getOneCharacter } from '../api';

interface State {
  character: Character | null;
  status: QueryStatus;
  error: unknown;
}

function useCharacterQuery(characterId: string): State {
  const {
    data: character = null,
    status,
    error,
  } = useQuery(['characters', characterId], () => getOneCharacter(characterId), {
    staleTime: Infinity,
  });

  return { character, status, error };
}

export { useCharacterQuery };
