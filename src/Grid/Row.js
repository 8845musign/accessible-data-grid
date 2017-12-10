import React from 'react'
import classNames from 'classnames'

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
    return <Cell
      column={column}
      row={this.props.row}
      parentId={this.state.rowId}
      rowId={this.props.index}
      index={index}
      key={this.props.columns.key}
      focusCell={this.props.focusCell}
      selectCell={this.props.selectCell}
      handleChangeCheckbox={this.props.handleChangeCheckbox}
    />
  }

  render() {
    const css = classNames('row', {
      'is-selected': this.props.row.checked,
    })

    return (
      <div className={css} id={`${this.state.rowId}`} role="row">
        {this.props.columns.map(this.renderCell.bind(this))}
      </div>
    )
  }
}