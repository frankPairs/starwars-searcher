import type { Character } from '../types';
import { CharacterCard } from './CharacterCard';
import { ErrorWrapper, Wrapper } from './CharacterList.styles';

interface Props {
  characters: Character[];
}

const CharacterList = ({ characters }: Props) => {
  if (characters.length === 0) {
    return (
      <ErrorWrapper>
        <p>Characters not found.</p>
      </ErrorWrapper>
    );
  }

  return (
    <Wrapper>
      {characters.map((character) => (
        <CharacterCard key={character.url} character={character} />
      ))}
    </Wrapper>
  );
};

export { CharacterList };
