import React from 'react'

import { createChildId } from './util'

export default class Cell extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      cellId: createChildId(this.props.parentId, this.props.index)
    }
  }

  render() {
    return (<div id={this.state.cellId} tabIndex={-1} className="cell">{this.props.row[this.props.column.key]}</div>)
  }
}
