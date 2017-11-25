import React from 'react'

import Cell from './Cell'
import { createChildId } from './util'

export default class Row extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      rowId: createChildId(this.props.parentId, this.props.index)
    }
  }

  renderCell(column, index) {
    return <Cell column={column} row={this.props.row} parentId={this.state.rowId} index={index} key={this.props.columns.key} />
  }
  
  renderCheckbox() {
    return (
      <div className="cell">
        <input aria-labelledby={createChildId(this.state.rowId, 1)} type="checkbox" tabIndex={-1} />
      </div>
    )
  }
  
  render() {
    return (
      <div className="row" id={`${this.state.rowId}`}>
        {this.renderCheckbox()}
        {this.props.columns.map(this.renderCell.bind(this))}
      </div>
    )
  }
}