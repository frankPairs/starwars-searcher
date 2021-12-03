import React from 'react';

import { Wrapper, Header, FilmWrapper } from './CharacterFilms.styles';
import { Film } from '../../films';

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
