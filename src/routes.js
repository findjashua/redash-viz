import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'routes'
import _ from 'lodash'

import { Chart } from './components/chart'
import { Queries } from './components/queries'

const render = component => ReactDOM.render(component, document.getElementById('app'))

export const handlers = {
  '/queries': props => render(<Queries {...props}/>),
  '/chart/:id': props => render(<Chart {...props}/>)
}

export const router = Router()
_.map(handlers, (handler, route) => router.addRoute(route, () => {}))
