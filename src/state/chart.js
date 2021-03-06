import _ from 'lodash'

import subject from '../lib/subject'
import publish from '../lib/publish'
import api from '../data/api'
import cache from '../data/cache'

const request$ = subject
  .filter(evt => evt.name === 'get_query_result')

request$.subscribe(evt => publish({
  name: 'request_in_progress',
  data: { name: cache.queries[evt.data.id] }
}))

const response$ = request$
  .flatMapLatest(evt => api.get('queries', _.pick(evt.data, 'id', 'params')))
  .flatMapLatest(resp => api.get('query_results', { id: resp.data.latest_query_data_id }))
  .subscribe(resp => {
    publish({
      name: 'request_complete',
      data: { rows: resp.data.query_result.data.rows }
    })
  })

const initialState = {
  selected: {
    x: 'action_type',
    y: '_1d_click'
  },
  request: 'not_started'
}

export default subject
  .scan((state, evt) => {
    switch (evt.name) {
      case 'axis_metric':
        state.selected[evt.data.axis] = evt.synthEvt.target.value
        break
      case 'request_in_progress':
        state.request = 'in_progress'
        state.name = evt.data.name
        break
      case 'request_complete':
        state.rows = evt.data.rows
        state.request = 'complete'
        break
    }
    return state
  }, initialState)
  .startWith(initialState)
