import { Planet, PlanetAPI } from '../types';

function planetDeserializer({ name, url }: PlanetAPI): Planet {
  return {
    name,
    url,
  };
}

export { planetDeserializer };
