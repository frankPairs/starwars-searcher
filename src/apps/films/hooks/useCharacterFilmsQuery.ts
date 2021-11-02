import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { RootState } from '../../../store';
import { Character } from '../../characters/types';
import { selectFilmsByCharacter } from '../selectors';
import { fetchCharacterFilms } from '../asyncThunks';
import { Film } from '../types';

interface State {
  characterFilms: Film[];
}

function useCharacterFilmsQuery(character: Character): State {
  const dispatch = useDispatch();
  const filmsSaved = useSelector((state: RootState) =>
    selectFilmsByCharacter(state, character.url),
  );

  useEffect(() => {
    const filmsToFetch = character.films.filter(
      (filmUrl) => !filmsSaved.map((film) => film.url).includes(filmUrl),
    );

    if (filmsToFetch.length > 0) {
      dispatch(fetchCharacterFilms(filmsToFetch));
    }
  }, []);

  return { characterFilms: filmsSaved };
}

export { useCharacterFilmsQuery };
