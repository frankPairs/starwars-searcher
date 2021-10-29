import { render } from '@testing-library/react';

import { App } from './App';

describe('<App />', () => {
  it('should show a title', () => {
    const { getByText } = getWrapper();

    getByText('React Typescript Boilerplate');
  });
});

function getWrapper() {
  return render(<App />);
}
