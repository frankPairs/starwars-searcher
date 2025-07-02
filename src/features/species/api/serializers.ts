import type { Species, SpeciesAPI } from '../types';

function speciesDeserializer({ name, url, people }: SpeciesAPI): Species {
  return {
    name,
    url,
    people,
  };
}

export { speciesDeserializer };
