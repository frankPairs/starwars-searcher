import { Progress } from '../../../components/feedback';
import { useCharacterFilmsQuery } from '../../films';
import { useCharacterPlanetQuery } from '../../planets';
import { useCharacterSpeciesQuery } from '../../species';
import type { Character } from '../types';
import { FilmsWrapper, Wrapper } from './CharacterDetail.styles';
import { CharacterFilms } from './CharacterFilms';
import { CharacterPersonalInfo } from './CharacterPersonalInfo';

interface Props {
  character: Character;
}

const CharacterDetail = ({ character }: Props) => {
  const filmsQueryResult = useCharacterFilmsQuery(character);
  const planetQueryResult = useCharacterPlanetQuery(character);
  const speciesQueryResult = useCharacterSpeciesQuery(character);

  if (
    filmsQueryResult.status === 'pending' ||
    planetQueryResult.status === 'pending' ||
    speciesQueryResult.status === 'pending'
  ) {
    return <Progress />;
  }

  return (
    <Wrapper>
      <CharacterPersonalInfo
        character={character}
        characterPlanet={planetQueryResult.characterPlanet}
        characterSpecies={speciesQueryResult.characterSpecies}
      />

      <FilmsWrapper>
        <CharacterFilms characterFilms={filmsQueryResult.characterFilms} />
      </FilmsWrapper>
    </Wrapper>
  );
};

export { CharacterDetail };
