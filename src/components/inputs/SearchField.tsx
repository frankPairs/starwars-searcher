import React, { ChangeEvent } from 'react';

import { Wrapper, Input } from './SearchField.styles';

interface Props {
  value: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField = (props: Props) => {
  return (
    <Wrapper>
      <Input type="search" {...props} />
    </Wrapper>
  );
};

export { SearchField };
