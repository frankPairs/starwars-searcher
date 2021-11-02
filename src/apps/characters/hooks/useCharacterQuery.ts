import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { FetchStatus } from '../../../typedefs/enums';
import { RootState } from '../../../store';
import { fetchOneCharacter } from '../asyncThunks';
import { selectCharacterById, selectError, selectStatus } from '../selectors';
import { Character } from '../types';

interface State {
  character: Character | null;
  status: FetchStatus;
  error: string | null;
}

function useCharacterQuery(characterId: string): State {
  const dispatch = useDispatch();
  const character = useSelector((state: RootState) => selectCharacterById(state, characterId));
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!character) {
      dispatch(fetchOneCharacter(characterId));
    }
  }, []);

  return { character, status, error };
}

export { useCharacterQuery };
