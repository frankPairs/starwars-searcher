import { atom } from 'recoil';

import { CharacterFilters } from './types';

const characterFiltersState = atom<CharacterFilters>({
  key: 'characterFilters',
  default: {
    search: '',
  },
});

export { characterFiltersState };
