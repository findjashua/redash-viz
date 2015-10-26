import store$ from './state/store'
import { router, handlers } from './routes'

store$
  .subscribe(store => {
    const { route, params, splats } = router.match(store.route)
    const storeKey = route.split('/')[1]
    const props = Object.assign({},
      store[storeKey],
      params,
      splats
    )
    return handlers[route](props)
  })
