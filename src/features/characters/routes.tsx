import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '../../routes';
import { CharacterDetailView, CharacterListView } from './views';

const charactersRoute = createRoute({
  path: 'characters',
  getParentRoute: () => rootRoute,
});

const charactersIndexRoute = createRoute({
  path: '/',
  getParentRoute: () => charactersRoute,
  component: CharacterListView,
});

const characterDetailRoute = createRoute({
  path: '$characterId',
  getParentRoute: () => charactersRoute,
  component: CharacterDetailView,
});

charactersRoute.addChildren([charactersIndexRoute, characterDetailRoute]);

export { characterDetailRoute, charactersIndexRoute, charactersRoute };
