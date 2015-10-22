import React from 'react'
import ReactDOM from 'react-dom'

import chart$ from './state/chart'
import { Chart } from './components/chart'

chart$
  .subscribe(chart => {
      ReactDOM.render(<Chart {...chart}/>, document.getElementById('app'));
  })
