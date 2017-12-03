import React from 'react'

export default class Checkbox extends React.Component {
  render() {
    const tabIndex = this.props.isFocus ? 0 : -1
    return (
      <input
        tabIndex={tabIndex}
        onChange={this.props.onChange}
        type="checkbox" checked={this.props.value}
      />
    )
  }
}