import { createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { Film } from './types';
import { getOneFilm } from './api';

const fetchCharacterFilms = createAsyncThunk<Film[], string[], { state: RootState }>(
  'get/fetchCharacterFilms',
  async (filmsUrl: string[]) => await Promise.all(filmsUrl.map((url) => getOneFilm(url))),
);

export { fetchCharacterFilms };
