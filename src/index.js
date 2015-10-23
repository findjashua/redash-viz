import React from 'react'
import ReactDOM from 'react-dom'

import store$ from './state/store'
import { Chart } from './components/chart'

store$
  .subscribe(store => {
    const { route } = store.router
    if (route.startsWith('/')) return ReactDOM.render(<Chart {...store.chart}/>, document.getElementById('app'))
  })
