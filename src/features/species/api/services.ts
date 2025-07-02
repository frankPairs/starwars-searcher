import { InternalServerError } from '../../../utils/api';
import type { Species, SpeciesAPI } from '../types';
import { speciesDeserializer } from './serializers';

/**
 * Get information about one specific species.
 *
 * @param url {string}: Species API url
 */
async function getOneSpecies(url: string): Promise<Species> {
  const response = await fetch(url);

  if (response.ok) {
    try {
      const data: SpeciesAPI = await response.json();

      return speciesDeserializer(data);
    } catch (err) {
      console.error(err);
      throw new InternalServerError();
    }
  }

  switch (response.status) {
    case 404:
      throw new Error('Species not found.');
    default:
      throw new Error(response.statusText);
  }
}

export { getOneSpecies };
