import { createSlice } from '@reduxjs/toolkit';

import { FilmState } from './types';
import { FetchStatus } from '../../typedefs/enums';
import { fetchCharacterFilms } from './asyncThunks';

const initialState: FilmState = {
  data: {},
  byCharacter: {},
  status: FetchStatus.IDLE,
  error: null,
};

const { reducer: filmReducer } = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers(builders) {
    builders
      .addCase(fetchCharacterFilms.pending, (state) => {
        state.status = FetchStatus.LOADING;
      })
      .addCase(fetchCharacterFilms.fulfilled, (state, action) => {
        const films = action.payload;

        films.forEach((film) => {
          state.status = FetchStatus.SUCCESS;
          state.data[film.url] = film;

          film.characters.forEach((characterUrl) => {
            if (!state.byCharacter[characterUrl]) {
              state.byCharacter[characterUrl] = [];
            }

            if (!state.byCharacter[characterUrl].includes(film.url)) {
              state.byCharacter[characterUrl].push(film.url);
            }
          });
        });
      })
      .addCase(fetchCharacterFilms.rejected, (state, action) => {
        state.status = FetchStatus.ERROR;
        state.data = {};
        state.error = action.error.message || null;
      });
  },
});

export { filmReducer };
