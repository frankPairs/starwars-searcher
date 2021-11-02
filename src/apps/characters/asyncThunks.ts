import { createAsyncThunk } from '@reduxjs/toolkit';
import { Character, GetCharactersDeserializer } from './types';
import { RootState } from '../../store';
import { selectFilters, selectNextLink } from './selectors';
import { getCharacters, getOneCharacter } from './api';

const fetchCharacters = createAsyncThunk<GetCharactersDeserializer, void, { state: RootState }>(
  'get/fetchCharacters',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const filters = selectFilters(state);
    const nextLink = selectNextLink(state);

    return await getCharacters(filters, nextLink);
  },
);

const fetchOneCharacter = createAsyncThunk<Character, string, { state: RootState }>(
  'get/fetchOneCharacter',
  async (characterId) => await getOneCharacter(characterId),
);

export { fetchCharacters, fetchOneCharacter };
