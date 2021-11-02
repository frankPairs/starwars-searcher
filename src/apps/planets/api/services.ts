import { InternalServerError } from '../../../utils/api';
import { Planet, PlanetAPI } from '../types';
import { planetDeserializer } from './serializers';

/**
 * Get information about one specific planet.
 *
 * @param url {string}: Planet API url
 */
async function getOnePlanet(url: string): Promise<Planet> {
  const response = await fetch(url);

  if (response.ok) {
    try {
      const data: PlanetAPI = await response.json();

      return planetDeserializer(data);
    } catch (err) {
      throw new InternalServerError();
    }
  }

  switch (response.status) {
    case 404:
      throw new Error('Planet not found.');
    default:
      throw new Error(response.statusText);
  }
}

export { getOnePlanet };
