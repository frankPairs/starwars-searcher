import type { ChangeEvent } from 'react';

import { Input, Wrapper } from './SearchField.styles';

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
