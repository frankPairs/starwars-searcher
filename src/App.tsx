import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';

import { theme } from './styles';
import { Layout } from './components/layout';
import { RedirectToHome } from './components/navigation';
import { CharactersRouter } from './apps/characters';

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/*" element={<Layout />}>
              <Route path="characters/*" element={<CharactersRouter />} />

              <Route path="*" element={<RedirectToHome homePath="/characters" />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  </BrowserRouter>
);

export { App };
