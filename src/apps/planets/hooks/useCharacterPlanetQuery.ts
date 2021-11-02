import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { RootState } from '../../../store';
import { selectPlanetByUrl } from '../selectors';
import { fetchOnePlanet } from '../asyncThunks';
import { Planet } from '../types';

interface State {
  characterPlanet: Planet | null;
}

function useCharacterPlanetQuery(planetUrl: string): State {
  const dispatch = useDispatch();
  const planetSaved = useSelector((state: RootState) => selectPlanetByUrl(state, planetUrl));

  useEffect(() => {
    if (!planetSaved || planetSaved.url !== planetUrl) {
      dispatch(fetchOnePlanet(planetUrl));
    }
  }, []);

  return { characterPlanet: planetSaved };
}

export { useCharacterPlanetQuery };
