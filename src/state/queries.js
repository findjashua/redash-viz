import _ from 'lodash'

import subject from '../lib/subject'
import api from '../data/api'

const initialState = {
  queries: [
    {
      "id": 1,
      "name": "Adgroup lifetime actions"
    }
  ]
}

export default subject
  .scan((state, evt) => {
    return state
  }, initialState)
  .startWith(initialState)
