import React from 'react';

import { Progress } from '../../../components/feedback';
import { useCharactersQuery } from '../hooks';
import { CharacterCard } from './CharacterCard';
import { Wrapper, ProgressWrapper, ErrorWrapper } from './CharacterList.styles';
import { Character } from '../types';

const CharacterList = () => {
  const [{ characters, status }] = useCharactersQuery();

  switch (status) {
    case 'loading':
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
          {characters.map((character: Character) => (
            <CharacterCard key={character.url} character={character} />
          ))}
        </Wrapper>
      );
    default:
      return null;
  }
};

export { CharacterList };
