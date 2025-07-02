interface Character {
  // Link to get information about the character
  url: string;
  name: string;
  homeWorld: string;
  gender: string;
  height: string;
  mass: string;
  skinColor: string;
  films: string[];
  species: string[];
}

interface CharacterAPI {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export type { Character, CharacterAPI };
