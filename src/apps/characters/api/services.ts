import { stringify } from 'query-string';

import { characterDeserializer, getCharactersDeserializer } from './serializers';
import { BASE_URL, InternalServerError } from '../../../utils/api';
import {
  Character,
  CharacterAPI,
  CharacterFilters,
  GetCharactersDeserializer,
  GetCharactersResponseBody,
} from '../types';

const CHARACTERS_BASE_URL = `${BASE_URL}/people/`;
const DEFAULT_FILTERS: CharacterFilters = { search: '' };

async function getCharacters(
  filters = DEFAULT_FILTERS,
  nextLink?: string | null,
): Promise<GetCharactersDeserializer> {
  const strParams = stringify(filters);
  const url = nextLink || `${CHARACTERS_BASE_URL}?${strParams}`;
  const response = await fetch(url);

  if (response.ok) {
    try {
      const data: GetCharactersResponseBody = await response.json();

      return getCharactersDeserializer(data);
    } catch (err) {
      throw new InternalServerError();
    }
  }

  switch (response.status) {
    case 404:
      throw new Error('Characters not found.');
    default:
      throw new Error(response.statusText);
  }
}

async function getOneCharacter(characterId: string): Promise<Character> {
  const url = `${CHARACTERS_BASE_URL}/${characterId}/`;
  const response = await fetch(url);

  if (response.ok) {
    try {
      const data: CharacterAPI = await response.json();

      return characterDeserializer(data);
    } catch (err) {
      throw new InternalServerError();
    }
  }

  switch (response.status) {
    case 404:
      throw new Error('Characters not found.');
    default:
      throw new Error(response.statusText);
  }
}

export { getCharacters, getOneCharacter };
