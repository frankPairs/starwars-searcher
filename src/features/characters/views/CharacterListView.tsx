import { useState } from 'react';

import { CharacterList, CharactersSearchForm } from '../components';
import { useCharactersQuery } from '../hooks/useCharactersQuery';
import { filterCharactersByName } from '../utils';
import { Wrapper } from './CharacterListView.styles';

const CharacterListView = () => {
  const [filters, setFilters] = useState({ name: '' });
  const { characters, status } = useCharactersQuery();

  function handleOnSearch(searchTerm: string) {
    setFilters((prevState) => ({
      ...prevState,
      name: searchTerm,
    }));
  }

  return (
    <Wrapper>
      <CharactersSearchForm onSearch={handleOnSearch} />
      <CharacterList
        characters={filterCharactersByName(characters, filters.name)}
        status={status}
      />
    </Wrapper>
  );
};

export { CharacterListView };
