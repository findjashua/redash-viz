import React from 'react'
import _ from 'lodash'

const QueryItems = items => {
  return _.map(items, item => {
    return (
      <li>
        {item.name}
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
