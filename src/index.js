import store$ from './state/store'
import routes from './routes'
import { createRouteMatcher, handleRoute } from './lib/router'
import { login } from './data/api'

const routeMatcher = createRouteMatcher(Object.keys(routes))
store$.subscribe(store => handleRoute(routeMatcher, routes, store))
