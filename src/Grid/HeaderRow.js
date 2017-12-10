import React from 'react'

import HeaderCell from './HeaderCell'

export default class HeaderRow extends React.Component {
  renderHeader(column) {
    return (
      <HeaderCell
        key={`${column.key}__columnheader`}
        column={column}
      />
    )
  }

  render() {
    return (
      <div role="row">
        {this.props.columns.map(this.renderHeader.bind(this))}
      </div>
    )
  }
}
