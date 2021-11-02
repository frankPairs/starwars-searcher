import React from 'react';

import { Character } from '../types';
import { Wrapper, FilmsWrapper } from './CharacterDetail.styles';
import { CharacterPersonalInfo } from './CharacterPersonalInfo';
import { CharacterFilms } from './CharacterFilms';

interface Props {
  character: Character;
}

const CharacterDetail = ({ character }: Props) => {
  return (
    <Wrapper>
      <CharacterPersonalInfo character={character} />

      <FilmsWrapper>
        <CharacterFilms character={character} />
      </FilmsWrapper>
    </Wrapper>
  );
};

export { CharacterDetail };
