import React from 'react'

export default class Default extends React.Component {
  render() {
    return (
      <span>{this.props.value}</span>
    )
  }
}