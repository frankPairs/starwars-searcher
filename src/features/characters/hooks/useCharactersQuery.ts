import { useQuery } from '@tanstack/react-query';

import { getCharacters } from '../api';

function useCharactersQuery() {
  const { data, ...queryData } = useQuery({
    queryKey: ['characters'],
    queryFn: () => getCharacters(),
  });

  return {
    characters: data ?? [],
    ...queryData,
  };
}

export { useCharactersQuery };
