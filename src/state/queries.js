import _ from 'lodash'

import subject from '../lib/subject'
import cache from '../data/cache'

const initialState = {
  queries: cache.queries
}

export default subject
  .scan((state, evt) => {
    return state
  }, initialState)
  .startWith(initialState)
