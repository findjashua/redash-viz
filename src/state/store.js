import { Observable } from 'rx-lite'

import chart$ from './chart'
import queries$ from './queries'
import route$ from './route'

export default Observable.combineLatest(chart$, queries$, route$, (chart, queries, route) => {
  return {
    chart,
    queries,
    route
  }
})
