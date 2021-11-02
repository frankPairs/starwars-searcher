import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { appStore } from './store';
import { theme } from './styles';
import { Layout } from './components/layout';
import { RedirectToHome } from './components/navigation';
import { CharactersRouter } from './apps/characters';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={appStore}>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="characters/*" element={<CharactersRouter />} />

            <Route path="*" element={<RedirectToHome homePath="/characters" />} />
          </Route>
        </Routes>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);

export { App };
