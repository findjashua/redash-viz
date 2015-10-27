import React from 'react'
import ReactDOM from 'react-dom'

import { Chart } from './components/chart'
import { Queries } from './components/queries'

const render = (component) => ReactDOM.render(component, document.getElementById('app'))

export default {
  '/queries': props => render(<Queries {...props}/>),
  '/chart/:id': props => render(<Chart {...props}/>)
}
