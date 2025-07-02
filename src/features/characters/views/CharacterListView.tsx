import { useState } from 'react';

import { CharacterList, CharactersSearchForm } from '../components';
import { charactersIndexRoute } from '../routes';
import { filterCharactersByName } from '../utils';
import { Wrapper } from './CharacterListView.styles';

const CharacterListView = () => {
  const [filters, setFilters] = useState({ name: '' });

  const characters = charactersIndexRoute.useLoaderData();

  function handleOnSearch(searchTerm: string) {
    setFilters((prevState) => ({
      ...prevState,
      name: searchTerm,
    }));
  }

  return (
    <Wrapper>
      <CharactersSearchForm onSearch={handleOnSearch} />

      <CharacterList characters={filterCharactersByName(characters, filters.name)} />
    </Wrapper>
  );
};

export { CharacterListView };
