import React from 'react'

import Row from './Row'
import Cell from './Cell'

export default class Grid extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      gridId: new Date().getTime(),
      focusCell: {
        rowId: 0,
        cellId: 0
      }
    }
  }
  
  renderRow(row, index) {
    return <Row
      parentId={this.state.gridId}
      row={row}
      key={row.id}
      index={index}
      columns={this.props.columns}
      focusCell={this.state.focusCell}
    />
  }
  
  render() {
    return (
      <div role="grid" className="grid">
        {this.props.data.map(this.renderRow.bind(this))}
      </div>
    )
  }
}
