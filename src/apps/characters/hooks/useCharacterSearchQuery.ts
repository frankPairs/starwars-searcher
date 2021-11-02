import { useDispatch, useSelector } from 'react-redux';

import { selectFilters, selectStatus } from '../selectors';
import { fetchCharacters } from '../asyncThunks';
import { characterActions } from '../slice';
import { FetchStatus } from '../../../typedefs/enums';

interface State {
  search: string;
  status: FetchStatus;
}

interface Actions {
  fetchCharactersRequest: () => void;
  setSearchFilter: (newSearchValue: string) => void;
}

function useCharacterSearchQuery(): [State, Actions] {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const { search } = useSelector(selectFilters);

  function fetchCharactersRequest() {
    dispatch(fetchCharacters());
  }

  function setSearchFilter(newSearchValue: string) {
    dispatch(characterActions.setFilter({ filterName: 'search', filterValue: newSearchValue }));
  }

  return [
    { search, status },
    { fetchCharactersRequest, setSearchFilter },
  ];
}

export { useCharacterSearchQuery };
