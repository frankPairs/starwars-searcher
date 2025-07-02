import { createRootRoute } from '@tanstack/react-router';

import { Layout } from './components/layout';
import { RedirectToHome } from './components/navigation/RedirectToHome';

export const rootRoute = createRootRoute({
  component: Layout,
  notFoundComponent: RedirectToHome,
});
