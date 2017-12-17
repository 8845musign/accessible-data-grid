import React from 'react'

import HeaderRow from './HeaderRow'
import Row from './Row'
import Cell from './Cell'

import {
  createData,
  createColumns,
  rowUp,
  rowDown,
  rowAndCellFirst,
  rowAndCellEnd,
  cellRight,
  cellLeft,
  cellFirst,
  cellEnd
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

  rowDown() {
    const focusCell = rowDown(this.state.data, this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  rowAndCellFirst() {
    const focusCell = rowAndCellFirst(this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  rowAndCellEnd() {
    const focusCell = rowAndCellEnd(this.state.data, this.state.columns, this.state.focusCell);

    this.setState({
      focusCell: focusCell,
    })
  }

  cellRight() {
    const focusCell = cellRight(this.state.columns, this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  cellLeft() {
    const focusCell = cellLeft(this.state.columns, this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  cellFirst() {
    const focusCell = cellFirst(this.state.columns, this.state.focusCell);

    this.setState({
      focusCell: focusCell
    })
  }

  cellEnd() {
    const focusCell = cellEnd(this.state.columns, this.state.focusCell);

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

  selectAllRows() {
    let data = createData(this.state.data)
    data = data.map(row => {
      row.checked = true
      return row
    })

    this.setState({ data })
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'a') {
      this.selectAllRows()
      return
    }

    if (e.ctrlKey && e.key === 'Home') {
      this.rowAndCellFirst()
      return
    } else if(e.ctrlKey && e.key === 'End') {
      this.rowAndCellEnd()
      return
    }

    switch(e.key) {
      case 'Home':
        this.cellFirst();
        break
      case 'End':
        this.cellEnd();
        break
      case 'ArrowUp':
        this.rowUp()
        break
      case 'ArrowRight':
        this.cellRight()
        break
      case 'ArrowDown':
        this.rowDown()
        break
      case 'ArrowLeft':
        this.cellLeft()
        break
    }
  }

  handleChangeRowSelection(rowId, value) {
    const data = createData(this.state.data)
    data[rowId].checked = !data[rowId].checked

    this.setState({ data })
  }

  renderHeader(column, index) {
    return (
      <div role="columnheader" key={`${column.key}__columnheader`}>
        {column.label}
      </div>
    )
  }

  renderHeaders() {
    return (
      <div role="row">
        {this.state.columns.map(this.renderHeader.bind(this))}
      </div>
    )
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
      onChangeRowSelection={this.handleChangeRowSelection.bind(this)}
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
        <HeaderRow columns={this.state.columns} />
        {this.state.data.map(this.renderRow.bind(this))}
      </div>
    )
  }
}
