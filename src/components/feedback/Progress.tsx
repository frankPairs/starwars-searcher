import React from 'react';

import { Wrapper } from './Progress.styles';

const Progress = () => (
  <Wrapper data-testid="loading" height="60" width="60">
    <circle cx="30" cy="30" r="20" />
  </Wrapper>
);

export { Progress };
