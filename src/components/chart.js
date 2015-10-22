import React from 'react'
import { BarChart } from 'react-d3-components'

import { Selector } from './selector'

const getData = (rows, selected) => {
  return _.map(rows, row => {
    return {
      x: row[selected.x],
      y: row[selected.y]
    }
  })
}

export const Chart = props => {
  const { rows, selected } = props

  const options = {
    x: {
      action_type: 'Action'
    },
    y: {
      _1d_click: '1d clicks',
      _7d_click: '7d clicks',
      _28d_click: '28d clicks',
      _1d_view: '1d views',
      _7d_view: '7d views',
      _28d_view: '28d views'
    }
  }

  const chartProps = {
    data: [{ values: getData(rows, selected) }],
    xAxis: { label: options.x[selected.x] },
    yAxis: { label: options.y[selected.y] },
    width: 1200,
    height: 400,
    margin: {
      top: 10,
      bottom: 50,
      left: 50,
      right: 10
    }
  }
  return (
    <div>
      <Selector options={options.x} selected={selected.x} axis={'x'}/>
      <br/>
      <Selector options={options.y} selected={selected.y} axis={'y'}/>
      <br/><br/>
      <BarChart {...chartProps}/>
    </div>
  )
}
