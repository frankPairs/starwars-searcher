import { RootState } from '../../store';

function selectPlanetByUrl(state: RootState, planetUrl: string) {
  return state.planets.data[planetUrl];
}

function selectStatus(state: RootState) {
  return state.planets.status;
}

export { selectPlanetByUrl, selectStatus };
