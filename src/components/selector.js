import React from 'react'
import _ from 'lodash'

import publish from '../lib/publish'

const Options = options => {
  return _.map(options, (label, value) => {
    return (
      <option key={value} value={value}>
        {label}
      </option>
    )
  })
}

export const Selector = props => {
  const {axis, selected, options } = props
  const payload = {
    name: 'axis_metric',
    data: { axis }
  }
  return (
    <div>
      <span>{axis}-axis metric</span>
      <select
        value={selected}
        onChange={publish.bind(null, payload)}>
        {Options(options)}
      </select>
    </div>
  )
}
