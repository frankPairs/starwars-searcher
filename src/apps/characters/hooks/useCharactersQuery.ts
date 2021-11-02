import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchCharacters } from '../asyncThunks';
import { selectCharactersAsList, selectError, selectStatus } from '../selectors';

function useCharactersQuery() {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharactersAsList);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    // It is 1 and not 0 because it can trigger a fetch characters after coming from the detail
    // page the first time
    if (characters.length <= 1) {
      dispatch(fetchCharacters());
    }
  }, []);

  return { characters, status, error };
}

export { useCharactersQuery };
