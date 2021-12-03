import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CharacterList, CharactersLoadMore, CharactersSearchForm } from '../components';
import { Wrapper } from './CharacterListView.styles';
import { useCharacterFilters } from '../hooks/useCharacterFilters';

const CharacterListView = () => {
  const [searchParams] = useSearchParams();
  const [_, { syncCharacterFiltersWithSearchParams }] = useCharacterFilters();

  useEffect(() => {
    syncCharacterFiltersWithSearchParams(searchParams);
  }, []);

  return (
    <Wrapper>
      <CharactersSearchForm />
      <CharacterList />
      <CharactersLoadMore />
    </Wrapper>
  );
};

export { CharacterListView };
