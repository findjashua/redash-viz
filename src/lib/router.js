import Router from 'routes'
import _ from 'lodash'
import { Observable } from 'rx-lite'

import subject from './subject'

export const createRouteMatcher = routes => {
  const routeMatcher = Router()
  _.map(routes, route => routeMatcher.addRoute(route, () => {}))
  return routeMatcher
}

export const handleRoute = (routeMatcher, routes, store) => {
  const { route, params, splats } = routeMatcher.match(store.route)
  const storeKey = route.split('/')[1]
  const props = Object.assign({},
    store[storeKey],
    params,
    splats
  )
  return routes[route](props)
}

export const getRoute$ = name => {
  const pushState$ = subject
    .filter(evt => evt.name === name)
    .map(evt => evt.route)

  pushState$.subscribe(route => window.history.pushState(null, null, route))

  const popState$ = Observable
    .fromEvent(window, 'popstate')
    .map(evt => window.location.pathname)

  return Observable.merge(pushState$, popState$)
    .startWith(window.location.pathname)
}

