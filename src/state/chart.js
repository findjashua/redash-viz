import _ from 'lodash'

import subject from '../lib/subject'
import api from '../data/api'

const selected = {
  x: 'action_type',
  y: '_1d_click'
}

const rows = api.get('query_result').query_result.data.rows

const initialState = {
  rows,
  selected
}

export default subject
  .scan((state, evt) => {
    switch (evt.name) {
      case 'axis_metric':
        state.selected[evt.data.axis] = evt.synthEvt.target.value
        break
    }
    return state
  }, initialState)
  .startWith(initialState)
