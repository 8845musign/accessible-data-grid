import React from 'react'

import Row from './Row'
import Cell from './Cell'

export default class Grid extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      gridId: new Date().getTime()
    }
  }
  
  renderRow(row, index) {
    return <Row parentId={this.state.gridId} row={row} key={row.id} index={index} columns={this.props.columns} />
  }
  
  render() {
    return (
      <div role="grid" className="grid">
        {this.props.data.map(this.renderRow.bind(this))}
      </div>
    )
  }
}
