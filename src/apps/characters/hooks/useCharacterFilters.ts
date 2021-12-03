import { useRecoilState } from 'recoil';
import { characterFiltersState } from '../atoms';
import { CharacterFilters } from '../types';
import { useSearchParams } from 'react-router-dom';

interface State {
  characterFilters: CharacterFilters;
}

interface Actions {
  syncCharacterFiltersWithSearchParams: (searchParams: URLSearchParams) => void;
  updateCharacterFilters: (newFilters: Partial<CharacterFilters>) => void;
}

function useCharacterFilters(): [State, Actions] {
  const [_, setSearchParams] = useSearchParams();
  const [characterFilters, setCharacterFilters] = useRecoilState(characterFiltersState);

  function syncCharacterFiltersWithSearchParams(searchParams: URLSearchParams) {
    const params: CharacterFilters = { search: '' };

    searchParams.forEach((value, key) => {
      // @ts-ignore
      params[key] = value;
    });

    setCharacterFilters(params);
  }

  function updateCharacterFilters(newFilters: Partial<CharacterFilters>) {
    setCharacterFilters((prevState) => {
      const newState = { ...prevState, ...newFilters };

      setSearchParams(newState);

      return newState;
    });
  }

  return [{ characterFilters }, { syncCharacterFiltersWithSearchParams, updateCharacterFilters }];
}

export { useCharacterFilters };
