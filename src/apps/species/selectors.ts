import { RootState } from '../../store';
import { Species } from './types';

function selectSpeciesByCharacter(state: RootState, characterUrl: string): Species[] {
  const characterSpecies = state.species.byCharacter[characterUrl];

  if (!characterSpecies) {
    return [];
  }

  return characterSpecies.map((speciesUrl) => state.species.data[speciesUrl]);
}

function selectStatus(status: RootState) {
  return status.species.status;
}

export { selectSpeciesByCharacter, selectStatus };
