import type { Film } from '../../films';
import { FilmWrapper, Header, Wrapper } from './CharacterFilms.styles';

interface Props {
  characterFilms: Film[];
}

const CharacterFilms = ({ characterFilms }: Props) => {
  return (
    <Wrapper>
      <Header>
        <h2 className="title">Films</h2>
      </Header>

      <ul>
        {characterFilms.map((film) => (
          <FilmWrapper key={film.url}>
            <p className="title">
              {film.title} ({new Date(film.releaseDate).toLocaleDateString()})
            </p>
            <p className="opening">{film.openingCrawl.slice(0, 150)}...</p>
          </FilmWrapper>
        ))}
      </ul>
    </Wrapper>
  );
};

export { CharacterFilms };
