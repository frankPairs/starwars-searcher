import {
  GetCharactersDeserializer,
  Character,
  CharacterAPI,
  GetCharactersResponseBody,
} from '../types';

function getCharactersDeserializer(data: GetCharactersResponseBody): GetCharactersDeserializer {
  return {
    nextPage: data.next,
    characters: data.results.map(characterDeserializer),
  };
}

function characterDeserializer({
  name,
  url,
  homeworld,
  species,
  gender,
  height,
  mass,
  skin_color,
  films,
}: CharacterAPI): Character {
  return {
    name,
    url,
    homeWorld: homeworld,
    species,
    gender,
    height,
    mass,
    skinColor: skin_color,
    films,
  };
}

export { getCharactersDeserializer, characterDeserializer };
