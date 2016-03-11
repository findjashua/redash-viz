import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'

import { Chart } from './components/chart'
import { Queries } from './components/queries'

const render = (component) => ReactDOM.render(component, document.getElementById('app'));

export default {
  '/queries': store => render(<Queries {..._.pick(store, 'queries')} />),
  '/chart/:id': (store, params) => render(<Chart
      {..._.pick(store, 'chart')},
      {..._.pick(params, 'id')} />)
}
