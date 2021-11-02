import React, { useEffect } from 'react';

import { Character } from '../types';
import { Wrapper, Header, Film } from './CharacterFilms.styles';
import { useCharacterFilmsQuery } from '../../films';

interface Props {
  character: Character;
}

const CharacterFilms = ({ character }: Props) => {
  const { characterFilms } = useCharacterFilmsQuery(character);

  return (
    <Wrapper>
      <Header>
        <h2 className="title">Films</h2>
      </Header>

      <ul>
        {characterFilms.map((film) => (
          <Film key={film.url}>
            <p className="title">
              {film.title} ({new Date(film.releaseDate).toLocaleDateString()})
            </p>
            <p className="opening">{film.openingCrawl.slice(0, 150)}...</p>
          </Film>
        ))}
      </ul>
    </Wrapper>
  );
};

export { CharacterFilms };
