import { FetchStatus } from '../../typedefs/enums';

interface PlanetsState {
  data: { [planetUrl: string]: Planet };
  status: FetchStatus;
  error: string | null;
}

interface Planet {
  name: string;
  url: string;
  population: string;
}

interface PlanetAPI {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}

export { PlanetsState, Planet, PlanetAPI };
