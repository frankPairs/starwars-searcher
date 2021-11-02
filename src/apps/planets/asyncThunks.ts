import { createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { Planet } from './types';
import { getOnePlanet } from './api';

const fetchOnePlanet = createAsyncThunk<Planet, string, { state: RootState }>(
  'get/fetchOnePlanet',
  async (planetUrl: string) => await getOnePlanet(planetUrl),
);

export { fetchOnePlanet };
