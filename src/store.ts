import { configureStore } from '@reduxjs/toolkit';

import { characterReducer } from './apps/characters';
import { planetReducer } from './apps/planets';
import { speciesReducer } from './apps/species';
import { filmReducer } from './apps/films';

type RootState = ReturnType<typeof appStore.getState>;

const appStore = configureStore({
  reducer: {
    characters: characterReducer,
    planets: planetReducer,
    species: speciesReducer,
    films: filmReducer,
  },
});

export { appStore, RootState };
