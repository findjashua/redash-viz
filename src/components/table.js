import React from 'react'
import _ from 'lodash'

const getRows = (array, columns) => {
  const fields = Object.keys(columns)
  return _.map(array, item => {
    return _.pick(item, fields)
  })
}

const Header = labels => {
  const header = _.map(labels, (label, index) => {
    return <th key={index}>{label}</th>
  })
  return <tr>{header}</tr>
}

const Body = rows => {
  return _.map(rows, (row, rowIndex) => {
    const cols = _.map(row, (col, colIndex) => {
      return <td key={colIndex}>{col}</td>
    })
    return <tr key={rowIndex}>{cols}</tr>
  })
}

export const Table = props => {
  const { data, columns } = props
  const labels = _.values(columns)
  const rows = getRows(data, columns)

  return (
    <table>
      <thead>
        {Header(labels)}
      </thead>
      <tbody>
        {Body(rows)}
      </tbody>
    </table>
  )
}
