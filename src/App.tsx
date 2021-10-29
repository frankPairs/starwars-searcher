import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AppStyles } from './App.styles';
import { GlobalStyles, theme } from './styles';
import logoUrl from './assets/images/logo-star-wars.png';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyles>
        <GlobalStyles />
        <header>
          <img className="logo" src={logoUrl} alt="Star wars logo" />
        </header>
        <main>
          <p>Hello!</p>
        </main>
      </AppStyles>
    </ThemeProvider>
  );
}

export { App };
