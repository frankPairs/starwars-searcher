import type { QueryStatus } from '@tanstack/react-query';
import { Progress } from '../../../components/feedback';
import type { Character } from '../types';
import { CharacterCard } from './CharacterCard';
import { ErrorWrapper, ProgressWrapper, Wrapper } from './CharacterList.styles';

interface Props {
  characters: Character[];
  status: QueryStatus;
}

const CharacterList = ({ status, characters }: Props) => {
  switch (status) {
    case 'pending':
      return (
        <ProgressWrapper>
          <Progress />
        </ProgressWrapper>
      );
    case 'success':
      if (characters.length === 0) {
        return (
          <ErrorWrapper>
            <p>There are no characters with that name.</p>
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
    default:
      return null;
  }
};

export { CharacterList };
