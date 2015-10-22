import _ from 'lodash'

import subject from '../subject'
import api from '../data/api'

const queries = api.get('queries')

const getData = queries => {
  return _.map(queries, query => {
    return _.pick(query, 'id', 'name')
  })
}

const initialState = {
  queries: getData(queries)
}

export default subject
  .scan((state, evt) => {
    return state
  }, initialState)
  .startWith(initialState)
