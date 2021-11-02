import React from 'react';

import { CharacterList, CharactersLoadMore, CharactersSearchForm } from '../components';
import { Wrapper } from './CharacterListView.styles';

const CharacterListView = () => {
  return (
    <Wrapper>
      <CharactersSearchForm />
      <CharacterList />
      <CharactersLoadMore />
    </Wrapper>
  );
};

export { CharacterListView };
