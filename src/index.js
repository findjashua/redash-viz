import store$ from './state/store'
import routes from './routes'
import { createRouter, handleRoute } from './router'

const router = createRouter(routes)

store$.subscribe(store => handleRoute(router, store))
