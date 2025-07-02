import debounce from 'lodash/debounce';
import type { ChangeEvent } from 'react';
import { useMemo, useState } from 'react';

import { SearchField } from '../../../components/inputs';
import { Wrapper } from './CharactersSearchForm.styles';

interface Props {
  onSearch: (searchTerm: string) => void;
}

// Debounce delay in milliseconds
const DEBOUNCE_DELAY = 750;

const CharactersSearchForm = ({ onSearch }: Props) => {
  const [search, setSearch] = useState('');
  const debouncedRequest = useMemo(() => debounce(onSearch, DEBOUNCE_DELAY), []);

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
