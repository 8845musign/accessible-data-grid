import React from 'react'

import Row from './Row'
import Cell from './Cell'

import {
  createData,
  createColumns,
  rowUp,
  rowRight,
  rowDown,
  rowLeft
} from './util'

export default class Grid extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data: createData(this.props.data),
      columns: createColumns(this.props.columns),
      gridId: new Date().getTime(),
      focusCell: {
        rowId: 0,
        cellId: 0
      },
      selectedRows: [0]
    }
  }

  rowUp() {
    const focusCell = rowUp(this.state.data, this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  rowRight() {
    const focusCell = rowRight(this.state.columns, this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  rowDown() {
    const focusCell = rowDown(this.state.data, this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  rowLeft() {
    const focusCell = rowLeft(this.state.columns, this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  selectCell(rowId, cellId) {
    this.setState({
      focusCell: {
        rowId,
        cellId,
      }
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

  handleChangeCheckbox(rowId, value) {
    const data = createData(this.state.data)
    data[rowId].checked = !data[rowId].checked

    this.setState({ data })
  }
  
  renderRow(row, index) {
    return <Row
      parentId={this.state.gridId}
      row={row}
      key={row.id}
      index={index}
      columns={this.state.columns}
      focusCell={this.state.focusCell}
      isSelected={this.state.selectedRows.includes(index)}
      selectCell={this.selectCell.bind(this)}
      handleChangeCheckbox={this.handleChangeCheckbox.bind(this)}
    />
  }

  render() {
    return (
      <div
        onKeyDown={this.handleKeyDown.bind(this)}
        aria-labelledby={this.props.ariaLabelledby}
        role="grid"
        className="grid"
      >
        {this.state.data.map(this.renderRow.bind(this))}
      </div>
    )
  }
}
