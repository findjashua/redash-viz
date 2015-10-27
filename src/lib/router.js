import Router from 'routes'
import _ from 'lodash'

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
