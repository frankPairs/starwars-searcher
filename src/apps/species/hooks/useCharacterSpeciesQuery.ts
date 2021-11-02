import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { RootState } from '../../../store';
import { Character } from '../../characters/types';
import { selectSpeciesByCharacter } from '../selectors';
import { fetchCharacterSpecies } from '../asyncThunks';
import { Species } from '../types';

interface State {
  characterSpecies: Species[];
}

function useCharacterSpeciesQuery(character: Character): State {
  const dispatch = useDispatch();
  const speciesSaved = useSelector((state: RootState) =>
    selectSpeciesByCharacter(state, character.url),
  );

  useEffect(() => {
    const speciesToFetch = character.species.filter(
      (speciesUrl) => !speciesSaved.map((species) => species.url).includes(speciesUrl),
    );

    if (speciesToFetch.length > 0) {
      dispatch(fetchCharacterSpecies(character.species));
    }
  }, []);

  return { characterSpecies: speciesSaved };
}

export { useCharacterSpeciesQuery };
