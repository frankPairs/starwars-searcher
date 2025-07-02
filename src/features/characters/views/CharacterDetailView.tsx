import { CharacterDetail } from '../components/CharacterDetail';
import { useCharacterQuery } from '../hooks';
import { characterDetailRoute } from '../routes';
import { Wrapper } from './CharacterDetailView.styles';

const CharacterDetailView = () => {
  const { characterId } = characterDetailRoute.useParams();
  const { character } = useCharacterQuery(characterId);

  if (!character) {
    return null;
  }

  return (
    <Wrapper>
      <CharacterDetail character={character} />
    </Wrapper>
  );
};

export { CharacterDetailView };
