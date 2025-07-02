import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from 'styled-components';

import { charactersRoute } from './features/characters';
import { rootRoute } from './routes';
import { theme } from './styles';

const queryClient = new QueryClient();

const routeTree = rootRoute.addChildren([charactersRoute]);
const router = createRouter({ routeTree });

const App = () => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ThemeProvider>
);

export { App };
