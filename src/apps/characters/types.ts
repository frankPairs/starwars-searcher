import { FetchStatus } from '../../typedefs/enums';

type FilterName = 'search';

interface CharactersState {
  data: { [characterUrl: string]: Character };
  status: FetchStatus;
  filters: CharacterFilters;
  next: string | null;
  error: string | null;
}

interface Character {
  // Link to get information about the character
  url: string;
  name: string;
  // Array of links related to the character species
  species: string[];
  homeWorld: string;
  gender: string;
  height: string;
  mass: string;
  skinColor: string;
  films: string[];
}

interface CharacterFilters {
  search: string;
}

interface GetCharactersDeserializer {
  // Link to the next page. When value equals to null it means there are not more pages to show.
  nextPage: string | null;
  characters: Character[];
}

interface CharacterAPI {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  // Array of links related to a starships species
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  // Array of links related to a character species
  species: string[];
  // Array of links related to a starships species
  starships: string[];
  url: string;
  // Array of links related to a vehicles species
  vehicles: string[];
}

interface GetCharactersResponseBody {
  // Total number of characters
  count: number;
  // Link to the next page of characters
  next: string | null;
  // Link to the previous page of characters
  previous: string | null;
  results: CharacterAPI[];
}

export {
  Character,
  CharactersState,
  CharacterFilters,
  CharacterAPI,
  GetCharactersResponseBody,
  GetCharactersDeserializer,
};
