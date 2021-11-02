import { RootState } from '../../store';
import { Film } from './types';

function selectFilmsByCharacter(state: RootState, characterUrl: string): Film[] {
  const characterFilms = state.films.byCharacter[characterUrl];

  if (!characterFilms) {
    return [];
  }

  return characterFilms
    .map((filmUrl) => state.films.data[filmUrl])

    .sort(
      (previousFilm, nextFilm) =>
        new Date(nextFilm.releaseDate).getTime() - new Date(previousFilm.releaseDate).getTime(),
    );
}

function selectStatus(status: RootState) {
  return status.species.status;
}

export { selectFilmsByCharacter, selectStatus };
