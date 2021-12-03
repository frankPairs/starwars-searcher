import React, { ChangeEvent, useState, useMemo, useEffect } from 'react';
import debounce from 'lodash/debounce';

import { SearchField } from '../../../components/inputs';
import { Wrapper } from './CharactersSearchForm.styles';
import { useCharacterFilters } from '../hooks/useCharacterFilters';

// Debounce delay in milliseconds
const DEBOUNCE_DELAY = 750;

const CharactersSearchForm = () => {
  const [{ characterFilters }, { updateCharacterFilters }] = useCharacterFilters();
  const [search, setSearch] = useState('');
  const debouncedRequest = useMemo(() => debounce(fetchCharacters, DEBOUNCE_DELAY), []);

  useEffect(() => {
    if (!search) {
      setSearch(characterFilters.search);
    }
  }, [characterFilters]);

  function fetchCharacters(searchTerm: string) {
    updateCharacterFilters({ search: searchTerm });
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
