import {
  route,
  layout,
  index,
  type RouteConfig,
} from '@react-router/dev/routes';

export default [
  layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    route('favorites', 'routes/favorites.tsx'),
    route('pokemon/:id', 'routes/pokemon/$id.tsx'),
    // route('types', 'routes/types.tsx'),
  ]),
] satisfies RouteConfig;
