import { createSlice } from '@reduxjs/toolkit';

import { PlanetsState } from './types';
import { FetchStatus } from '../../typedefs/enums';
import { fetchOnePlanet } from './asyncThunks';

const initialState: PlanetsState = {
  data: {},
  status: FetchStatus.IDLE,
  error: null,
};

const { reducer: planetReducer } = createSlice({
  name: 'planets',
  initialState,
  reducers: {},
  extraReducers(builders) {
    builders
      .addCase(fetchOnePlanet.pending, (state) => {
        state.status = FetchStatus.LOADING;
      })
      .addCase(fetchOnePlanet.fulfilled, (state, action) => {
        const planet = action.payload;

        state.status = FetchStatus.SUCCESS;
        state.data[planet.url] = planet;
      })
      .addCase(fetchOnePlanet.rejected, (state, action) => {
        state.status = FetchStatus.ERROR;
        state.error = action.error.message || null;
      });
  },
});

export { planetReducer };
