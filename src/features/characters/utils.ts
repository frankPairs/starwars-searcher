import type { Character } from './types';

function getCharacterIdFromUrl(characterUrl: string) {
  const splitUrlBySlash = characterUrl.split('/');

  return splitUrlBySlash[splitUrlBySlash.length - 1];
}

function filterCharactersByName(characters: Character[], name: string): Character[] {
  if (name.length === 0) {
    return characters;
  }

  return characters.filter((character) => {
    return character.name.toLowerCase().match(name.toLowerCase());
  });
}

export { filterCharactersByName, getCharacterIdFromUrl };
