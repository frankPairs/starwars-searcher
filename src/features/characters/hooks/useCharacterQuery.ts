import { useQuery } from '@tanstack/react-query';

import { getOneCharacter } from '../api';

function useCharacterQuery(characterId: string) {
  const { data: character = null, ...queryData } = useQuery({
    queryFn: () => getOneCharacter(characterId),
    queryKey: ['characters', characterId],
    staleTime: Infinity,
  });

  return { character, queryData };
}

export { useCharacterQuery };
