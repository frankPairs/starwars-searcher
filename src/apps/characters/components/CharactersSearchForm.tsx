import React, { ChangeEvent, useState, useMemo } from 'react';
import debounce from 'lodash/debounce';

import { SearchField } from '../../../components/inputs';
import { Wrapper } from './CharactersSearchForm.styles';
import { useCharacterSearchQuery } from '../hooks';
import { FetchStatus } from '../../../typedefs/enums';

// Debounce delay in miliseconds
const DEBOUNCE_DELAY = 500;

const CharactersSearchForm = () => {
  const [search, setSearch] = useState('');

  const [{ status }, { fetchCharactersRequest, setSearchFilter }] = useCharacterSearchQuery();
  const debouncedRequest = useMemo(
    () =>
      debounce((value: string) => {
        setSearchFilter(value);
        fetchCharactersRequest();
      }, DEBOUNCE_DELAY),
    [],
  );

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
        disabled={status === FetchStatus.LOADING}
        onChange={handleSearchChange}
      />
    </Wrapper>
  );
};

export { CharactersSearchForm };
