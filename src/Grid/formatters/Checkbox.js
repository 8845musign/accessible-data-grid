import React from 'react'
import {
  createChildId,
} from '../util'

export default class Checkbox extends React.Component {
  render() {
    const tabIndex = this.props.isFocus ? 0 : -1
    return (
      <input
        tabIndex={tabIndex}
        onChange={this.props.onChange}
        type="checkbox" checked={this.props.value}
        aria-labelledby={createChildId(this.props.parentId, 1)}
      />
    )
  }
}