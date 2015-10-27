import Router from 'routes'
import _ from 'lodash'

export const createRouter = routes => {
  const matcher = Router()
  _.map(routes, (handler, route) => matcher.addRoute(route, () => {}))
  return { matcher, routes }
}

export const handleRoute = (router, store) => {
  const { matcher, routes } = router
  const { route, params, splats } = matcher.match(store.route)
  const storeKey = route.split('/')[1]
  const props = Object.assign({},
    store[storeKey],
    params,
    splats
  )
  return routes[route](props)
}
