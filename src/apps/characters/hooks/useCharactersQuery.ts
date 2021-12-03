import { QueryStatus, useInfiniteQuery } from 'react-query';

import { getCharacters } from '../api';
import { Character } from '../types';
import { useRecoilValue } from 'recoil';
import { selectCharactersFilter } from '../selectors';

interface State {
  characters: Character[];
  status: QueryStatus;
  hasMoreCharacters: boolean;
  error: unknown;
  isFetching: boolean;
}

interface Actions {
  loadMoreCharacters: () => void;
}

function useCharactersQuery(): [State, Actions] {
  const filters = useRecoilValue(selectCharactersFilter);
  const { status, error, data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    ['characters', filters],
    ({ pageParam }) => getCharacters(filters, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
      staleTime: Infinity,
    },
  );

  return [
    {
      characters: data?.pages.flatMap((result) => result.characters) || [],
      status,
      hasMoreCharacters: hasNextPage || false,
      error,
      isFetching,
    },
    { loadMoreCharacters: fetchNextPage },
  ];
}

export { useCharactersQuery };
