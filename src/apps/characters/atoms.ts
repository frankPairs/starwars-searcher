import { atom, selector } from 'recoil';

import { CharacterFilters } from './types';

const characterFiltersState = atom<CharacterFilters>({
  key: 'CharacterFilters',
  default: selector({
    key: 'CharacterFilters/Default',
    get: () => {
      const params = new URLSearchParams(window.location.search);

      return { search: params.get('search') || '' };
    },
  }),
});

export { characterFiltersState };
