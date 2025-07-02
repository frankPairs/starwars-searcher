import type { Planet, PlanetAPI } from '../types';

function planetDeserializer({ name, url, population }: PlanetAPI): Planet {
  return {
    name,
    url,
    population,
  };
}

export { planetDeserializer };
