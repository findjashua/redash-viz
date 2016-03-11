import store$ from './state/store'
import routes from './routes'
import { createRouteMatcher, handleRoute } from './lib/router'
import { login } from './data/api'

const handleRoute = getRouteHandler(Object.keys(routes))
store$.subscribe(store => handleRoute(store))
