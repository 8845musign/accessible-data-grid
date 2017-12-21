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
    this.focusableChlild = this.cell.querySelector(focusable)

    // focusableな子要素があった場合、cellのtabIndexを除去するためにforceUpdateする
    if (this.focusableChlild) {
      this.forceUpdate();
    }

    this.focus()
  }

  componentDidUpdate() {
    this.focus()
  }

  focus() {
    if (!this.state.isFocus) return;

    if (this.focusableChlild) {
      this.focusableChlild.focus()
    } else {
      this.cell.focus()
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

    let tabIndex = (
      this.state.isFocus &&
      !isCheckBox(Formatter)
    ) ? 0 : -1

    // focusableな子要素があったらセル自体にフォーカスを当てない
    if (this.focusableChlild) tabIndex = null;

    return (
      <div
        role="gridcell"
        id={this.state.cellId}
        tabIndex={tabIndex}
        className="cell"
        ref={(ref) => { this.cell = ref }}
        onKeyPress={this.handleKeyPress.bind(this)}
        onClick={this.handleClick.bind(this)}
      >
        <Formatter
          parentId={this.props.parentId}
          isFocus={this.state.isFocus}
          onChange={handleChange}
          value={this.props.row[this.props.column.key]}
        />
      </div>
    )
  }
}
