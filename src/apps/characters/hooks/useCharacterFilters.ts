import { useRecoilState } from 'recoil';
import { characterFiltersState } from '../atoms';
import { CharacterFilters } from '../types';
import { useSearchParams } from 'react-router-dom';

interface State {
  characterFilters: CharacterFilters;
}

interface Actions {
  updateCharacterFilters: (newFilters: Partial<CharacterFilters>) => void;
}

function useCharacterFilters(): [State, Actions] {
  const [_, setSearchParams] = useSearchParams();
  const [characterFilters, setCharacterFilters] = useRecoilState(characterFiltersState);

  function updateCharacterFilters(newFilters: Partial<CharacterFilters>) {
    setCharacterFilters((prevState) => {
      const newState = { ...prevState, ...newFilters };

      setSearchParams(newState);

      return newState;
    });
  }

  return [{ characterFilters }, { updateCharacterFilters }];
}

export { useCharacterFilters };
