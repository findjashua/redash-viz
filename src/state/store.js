import { Observable } from 'rx-lite'

import chart$ from './chart'
import queries$ from './queries'
import router$ from './router'

export default Observable.combineLatest(chart$, queries$, router$, (chart, queries, router) => {
  return {
    chart,
    queries,
    router
  }
})
