import React from 'react'
import focusable from 'focusable'

import {
  createChildId,
  isFocus,
  isCheckBox,
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
    this.focus()
  }

  componentDidUpdate() {
    this.focus()
  }

  focus() {
    if (this.state.isFocus) {
      const focusableEl = this.cell.querySelector(focusable)

      if (focusableEl) {
        focusableEl.focus()
      } else {
        this.cell.focus()
      }
    }
  }

  handleClick() {
    this.props.selectCell(this.props.rowId, this.props.index)
  }

  handleKeyPress(e) {
    // チェックボックス上でkeyが押された場合、Cell自体のkeyEventは無視して多重に変更がかかることを防ぐ
    if (e.target.getAttribute('type') === 'checkbox') return

    if (e.shiftKey && e.key === '\u0020') {
      // Shift + Space
      this.props.onChangeRowSelection(this.props.rowId)
    }
  }

  // CheckboxFormatterへ渡す
  handleChange(e) {
    if (e.target.getAttribute('type') === 'checkbox') {
      this.props.onChangeRowSelection(this.props.rowId)
    }
  }

  render() {
    const Formatter = this.props.column.formatter

    const handleChange = () => {
      this.props.onChangeRowSelection(this.props.rowId)
    }

    return (
      <div
        role="gridcell"
        id={this.state.cellId}
        tabIndex={(this.state.isFocus && !isCheckBox(Formatter)) ? 0 : -1}
        className="cell"
        ref={(ref) => { this.cell = ref }}
        onKeyPress={this.handleKeyPress.bind(this)}
      >
        <Formatter
          isFocus={this.state.isFocus}
          onChange={handleChange}
          value={this.props.row[this.props.column.key]}
        />
      </div>
    )
  }
}
