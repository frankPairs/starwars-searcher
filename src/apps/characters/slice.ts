import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FetchStatus } from '../../typedefs/enums';
import { fetchCharacters, fetchOneCharacter } from './asyncThunks';
import { Character, CharactersState, SetFilterPayloadAction } from './types';

const initialState: CharactersState = {
  data: {},
  status: FetchStatus.IDLE,
  filters: { search: '' },
  next: null,
  error: null,
};

const { actions: characterActions, reducer: characterReducer } = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<SetFilterPayloadAction>) => {
      const { filterName, filterValue } = action.payload;

      state.data = {};
      state.next = null;
      state.filters[filterName] = filterValue;
      state.status = FetchStatus.IDLE;
    },
  },
  extraReducers(builders) {
    builders
      .addCase(fetchCharacters.pending, (state) => {
        state.status = FetchStatus.LOADING;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = FetchStatus.SUCCESS;
        state.data = action.payload.characters.reduce(
          (data, character) => ({ ...data, [character.url]: character }),
          state.data,
        );
        state.next = action.payload.nextPage;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = FetchStatus.ERROR;
        state.error = action.error.message || null;
      })
      .addCase(fetchOneCharacter.pending, (state) => {
        state.status = FetchStatus.LOADING;
      })
      .addCase(fetchOneCharacter.fulfilled, (state, action: PayloadAction<Character>) => {
        const character = action.payload;

        state.status = FetchStatus.SUCCESS;
        state.data[character.url] = character;
      })
      .addCase(fetchOneCharacter.rejected, (state, action) => {
        state.status = FetchStatus.ERROR;
        state.error = action.error.message || null;
      });
  },
});

export { characterReducer, characterActions };
