import React from 'react'

import Row from './Row'
import Cell from './Cell'

import {
  rowUp,
  rowRight,
  rowDown,
  rowLeft
} from './util'

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

  rowUp() {
    const focusCell = rowUp(this.props.data, this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  rowRight() {
    const focusCell = rowRight(this.props.columns, this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  rowDown() {
    const focusCell = rowDown(this.props.data, this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  rowLeft() {
    const focusCell = rowLeft(this.props.columns, this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  handleKeyDown(e) {
    switch(e.key) {
      case 'ArrowUp':
        this.rowUp()
        break
      case 'ArrowRight':
        this.rowRight()
        break
      case 'ArrowDown':
        this.rowDown()
        break
      case 'ArrowLeft':
        this.rowLeft()
        break
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
      <div
        onKeyDown={this.handleKeyDown.bind(this)}
        role="grid"
        className="grid"
      >
        {this.props.data.map(this.renderRow.bind(this))}
      </div>
    )
  }
}
