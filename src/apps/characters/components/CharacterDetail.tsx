import React from 'react';

import { Progress } from '../../../components/feedback';
import { Character } from '../types';
import { useCharacterFilmsQuery } from '../../films';
import { useCharacterPlanetQuery } from '../../planets';
import { useCharacterSpeciesQuery } from '../../species';
import { CharacterPersonalInfo } from './CharacterPersonalInfo';
import { CharacterFilms } from './CharacterFilms';
import { Wrapper, FilmsWrapper } from './CharacterDetail.styles';

interface Props {
  character: Character;
}

const CharacterDetail = ({ character }: Props) => {
  const filmsQuery = useCharacterFilmsQuery(character);
  const planetQuery = useCharacterPlanetQuery(character);
  const speciesQuery = useCharacterSpeciesQuery(character);

  if (
    filmsQuery.status === 'loading' ||
    planetQuery.status === 'loading' ||
    speciesQuery.status === 'loading'
  ) {
    return <Progress />;
  }

  return (
    <Wrapper>
      <CharacterPersonalInfo
        character={character}
        characterPlanet={planetQuery.characterPlanet}
        characterSpecies={speciesQuery.characterSpecies}
      />

      <FilmsWrapper>
        <CharacterFilms characterFilms={filmsQuery.characterFilms} />
      </FilmsWrapper>
    </Wrapper>
  );
};

export { CharacterDetail };
