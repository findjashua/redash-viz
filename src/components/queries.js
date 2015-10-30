import React from 'react'
import _ from 'lodash'

import publish from '../lib/publish'

const QueryItems = queries => {
  return _.map(queries, (name, id) => {
    const payload = {
      name: 'navigate',
      data: { route: `/chart/${id}` },
      preventDefault: true
    }
    return (
      <li key={id}>
        <a href='#' onClick={publish.bind(null, payload)}>{name}</a>
      </li>
    )
  })
}

export const Queries = props => {
  return (
    <ul>
      {QueryItems(props.queries)}
    </ul>
  )
}
