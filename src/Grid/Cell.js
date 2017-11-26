import React from 'react'

import {
  createChildId,
  isFocus,
} from './util'

export default class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cellId: createChildId(this.props.parentId, this.props.index),
      isFocus: isFocus(this.props.focusCell, this.props.rowId, this.props.index)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isFocus: isFocus(nextProps.focusCell, nextProps.rowId, nextProps.index)
    })
  }

  componentDidMount() {
    if (this.state.isFocus) {
      this.cell.focus()
    }
  }

  componentDidUpdate() {
    if (this.state.isFocus) {
      this.cell.focus()
    }
  }

  handleClick() {
    this.props.selectCell(this.props.rowId, this.props.index)
  }

  render() {
    return (
      <div
        id={this.state.cellId}
        tabIndex={this.state.isFocus ? 0 : -1}
        className="cell"
        ref={(ref) => { this.cell = ref }}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.row[this.props.column.key]}
      </div>
    )
  }
}
