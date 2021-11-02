import { createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { Species } from './types';
import { getOneSpecies } from './api';

const fetchCharacterSpecies = createAsyncThunk<Species[], string[], { state: RootState }>(
  'get/fetchCharacterSpecies',
  async (speciesUrl: string[]) => await Promise.all(speciesUrl.map((url) => getOneSpecies(url))),
);

export { fetchCharacterSpecies };
