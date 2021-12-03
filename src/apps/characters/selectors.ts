import { selector } from 'recoil';
import { characterFiltersState } from './atoms';

const selectCharactersFilter = selector({
  key: 'SelectCharacterFilters',
  get: ({ get }) => {
    return get(characterFiltersState);
  },
});

export { selectCharactersFilter };
