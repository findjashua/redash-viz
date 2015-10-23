import React from 'react'
import _ from 'lodash'

import { publish } from '../utils'

const handleClick = (payload, e) => {
  e.preventDefault()
  publish(payload, e)
}

const QueryItems = items => {
  return _.map(items, item => {
    const payload = {
      name: 'navigate',
      route: '/chart'
    }
    return (
      <li key={item.id}>
        <a href='#' onClick={handleClick.bind(null, payload)}>{item.name}</a>
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
