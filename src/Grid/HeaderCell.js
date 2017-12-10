import React from 'react'

export default class HeaderCell extends React.Component {
  render() {
    return (
      <div role="columnheader">
        {this.props.column.label}
      </div>
    )
  }
}
