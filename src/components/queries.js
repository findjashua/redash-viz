import React from 'react'
import _ from 'lodash'

import { publish } from '../utils'

const QueryItems = items => {
  return _.map(items, item => {
    const payload = {
      name: 'navigate',
      route: '/chart',
      preventDefault: true
    }
    return (
      <li key={item.id}>
        <a href='#' onClick={publish.bind(null, payload)}>{item.name}</a>
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
