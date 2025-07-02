import type { Character, CharacterAPI } from '../types';

function characterDeserializer({
  gender,
  height,
  homeworld,
  mass,
  name,
  skin_color,
  url,
  films,
  species,
}: CharacterAPI): Character {
  return {
    gender,
    height,
    homeWorld: homeworld,
    mass,
    name,
    skinColor: skin_color,
    url,
    films,
    species,
  };
}

function charactersDeserializer(characters: CharacterAPI[]): Character[] {
  return characters.map(characterDeserializer);
}

export { characterDeserializer, charactersDeserializer };
