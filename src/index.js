import store$ from './state/store'
import routes from './routes'
import { createRouteMatcher, handleRoute } from './lib/router'

const routeMatcher = createRouteMatcher(Object.keys(routes))
store$.subscribe(store => handleRoute(routeMatcher, routes, store))
