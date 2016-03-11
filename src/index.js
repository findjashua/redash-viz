import store$ from './state/store';
import routes from './routes';
import { createRouteMatcher, handleRoute } from './lib/router';
import { login } from './data/api';

const routeMatcher = getRouteMatcher(Object.keys(routes));

store$.subscribe(store => {
  const { route, params } = routeMatcher.match(store.route);
  routes[route](store, params);
});
