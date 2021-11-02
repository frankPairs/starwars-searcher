import React from 'react';

import { FetchStatus } from '../../../typedefs/enums';
import { Progress } from '../../../components/feedback';
import { useCharactersQuery } from '../hooks';
import { CharacterCard } from './CharacterCard';
import { Wrapper, ProgressWrapper, ErrorWrapper } from './CharacterList.styles';

const CharacterList = () => {
  const { characters, status } = useCharactersQuery();

  switch (status) {
    case FetchStatus.LOADING:
    case FetchStatus.SUCCESS:
      if (characters.length === 0 && status === FetchStatus.LOADING) {
        return (
          <ProgressWrapper>
            <Progress />
          </ProgressWrapper>
        );
      }

      if (characters.length === 0 && status === FetchStatus.SUCCESS) {
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
    case FetchStatus.ERROR:
      return (
        <ErrorWrapper>
          <p>There are no characters with that name.</p>
        </ErrorWrapper>
      );
    default:
      return null;
  }
};

export { CharacterList };
