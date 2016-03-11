import Router from 'routes';
import _ from 'lodash';
import { Observable } from 'rx-lite';

import subject from './subject';

export const getRouteMatcher = routes => {
  const routeMatcher = Router();
  _.map(routes, route => routeMatcher.addRoute(route, () => {}));
  return routeMatcher;
};;

export const getRoute$ = () => {
  const pushState$ = subject
    .filter(evt => evt.name === 'navigate')
    .map(evt => evt.data.route);

  pushState$.subscribe(route => window.history.pushState(null, null, route));

  const popState$ = Observable
    .fromEvent(window, 'popstate')
    .map(evt => window.location.pathname);

  return Observable.merge(pushState$, popState$)
    .startWith(window.location.pathname);
};;
