import React from 'react'
import ReactDOM from 'react-dom'

import store$ from './state/store'
import { Chart } from './components/chart'
import { Queries } from './components/queries'

store$
  .subscribe(store => {
    const { route } = store
    if (route.startsWith('/chart')) return ReactDOM.render(<Chart {...store.chart}/>, document.getElementById('app'))
    if (route.startsWith('/queries')) return ReactDOM.render(<Queries {...store.queries}/>, document.getElementById('app'))
  })
