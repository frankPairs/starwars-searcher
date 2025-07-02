import { BASE_URL, InternalServerError } from '../../../utils/api';
import type { Character, CharacterAPI } from '../types';
import { characterDeserializer, charactersDeserializer } from './serializers';

const CHARACTERS_BASE_URL = `${BASE_URL}/people`;

async function getCharacters() {
  const url = new URL(CHARACTERS_BASE_URL);

  const response = await fetch(url.toString());

  if (response.ok) {
    try {
      const data: CharacterAPI[] = await response.json();

      return charactersDeserializer(data);
    } catch (err) {
      console.error(err);
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
  const url = new URL(`${CHARACTERS_BASE_URL}/${characterId}`);
  const response = await fetch(url.toString());

  if (response.ok) {
    try {
      const data: CharacterAPI = await response.json();

      return characterDeserializer(data);
    } catch (err) {
      console.error(err);
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
