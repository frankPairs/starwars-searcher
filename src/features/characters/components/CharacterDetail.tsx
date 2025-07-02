import { characterDetailRoute } from '../routes';
import { FilmsWrapper, Wrapper } from './CharacterDetail.styles';
import { CharacterFilms } from './CharacterFilms';
import { CharacterPersonalInfo } from './CharacterPersonalInfo';

const CharacterDetail = () => {
  const { character, planet, species, films } = characterDetailRoute.useLoaderData();

  return (
    <Wrapper>
      <CharacterPersonalInfo
        character={character}
        characterPlanet={planet}
        characterSpecies={species}
      />

      <FilmsWrapper>
        <CharacterFilms characterFilms={films} />
      </FilmsWrapper>
    </Wrapper>
  );
};

export { CharacterDetail };
