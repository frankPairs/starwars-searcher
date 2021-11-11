import React, { ChangeEvent, useState, useMemo } from 'react';
import debounce from 'lodash/debounce';

import { SearchField } from '../../../components/inputs';
import { Wrapper } from './CharactersSearchForm.styles';
import { useCharacterSearchQuery } from '../hooks';

// Debounce delay in milliseconds
const DEBOUNCE_DELAY = 750;

const CharactersSearchForm = () => {
  const [search, setSearch] = useState('');
  const [_, { fetchCharactersRequest, setSearchFilter }] = useCharacterSearchQuery();
  const debouncedRequest = useMemo(() => debounce(fetchCharacters, DEBOUNCE_DELAY), []);

  function fetchCharacters(searchTerm: string) {
    setSearchFilter(searchTerm);
    fetchCharactersRequest();
  }

  function handleSearchChange(evt: ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;

    setSearch(value);
    debouncedRequest(value);
  }

  return (
    <Wrapper>
      <SearchField
        id="search-characters"
        placeholder="Search a character"
        value={search}
        onChange={handleSearchChange}
      />
    </Wrapper>
  );
};

export { CharactersSearchForm };
