import { createRoute } from '@tanstack/react-router';

import { rootRoute } from '../../routes';
import {
  getCharacterFilms,
  getCharacterPlanet,
  getCharacters,
  getCharacterSpecies,
  getOneCharacter,
} from './api/services';
import { LoaderRouteError } from './components/LoaderRouteError';
import { CharacterDetailView, CharacterListView } from './views';

const charactersRoute = createRoute({
  path: 'characters',
  getParentRoute: () => rootRoute,
});

const charactersIndexRoute = createRoute({
  path: '/',
  getParentRoute: () => charactersRoute,
  component: CharacterListView,
  loader() {
    return getCharacters();
  },
  errorComponent: ({ error }) => {
    return <LoaderRouteError errorMessage={error.message} />;
  },
});

const characterDetailRoute = createRoute({
  path: '$characterId',
  getParentRoute: () => charactersRoute,
  component: CharacterDetailView,
  loader: async ({ params }) => {
    const character = await getOneCharacter(params.characterId);
    const [films, planet, species] = await Promise.all([
      getCharacterFilms(character),
      getCharacterPlanet(character),
      getCharacterSpecies(character),
    ]);

    return { character, films, planet, species };
  },
  errorComponent: ({ error }) => {
    return <LoaderRouteError errorMessage={error.message} />;
  },
});

charactersRoute.addChildren([charactersIndexRoute, characterDetailRoute]);

export { characterDetailRoute, charactersIndexRoute, charactersRoute };
