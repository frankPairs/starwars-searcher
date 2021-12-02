import { createSlice } from '@reduxjs/toolkit';

import { SpeciesState } from './types';
import { FetchStatus } from '../../typedefs/enums';
import { fetchCharacterSpecies } from './asyncThunks';

const initialState: SpeciesState = {
  data: {},
  byCharacter: {},
  status: FetchStatus.IDLE,
  error: null,
};

const { reducer: speciesReducer } = createSlice({
  name: 'species',
  initialState,
  reducers: {},
  extraReducers(builders) {
    builders
      .addCase(fetchCharacterSpecies.pending, (state) => {
        state.status = FetchStatus.LOADING;
      })
      .addCase(fetchCharacterSpecies.fulfilled, (state, action) => {
        const speciesList = action.payload;

        speciesList.forEach((species) => {
          state.status = FetchStatus.SUCCESS;
          state.data[species.url] = species;

          species.people.forEach((characterUrl) => {
            if (!state.byCharacter[characterUrl]) {
              state.byCharacter[characterUrl] = [];
            }

            if (!state.byCharacter[characterUrl].includes(species.url)) {
              state.byCharacter[characterUrl].push(species.url);
            }
          });
        });
      })
      .addCase(fetchCharacterSpecies.rejected, (state, action) => {
        state.status = FetchStatus.ERROR;
        state.error = action.error.message || null;
      });
  },
});

export { speciesReducer };
