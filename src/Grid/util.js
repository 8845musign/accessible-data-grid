export const createChildId = (parentId, index) => {
  return `${parentId}_${index}`
}

export const isFocus = (focusCell, rowId, cellId) => {
  return focusCell.rowId === rowId && focusCell.cellId === cellId;
}

export const rowUp = (row, focusCell) => {
  const rowId = focusCell.rowId > 0 ? --focusCell.rowId : focusCell.rowId
  return Object.assign({},
    focusCell,
    { rowId }
  )
}

export const rowRight = (columns, focusCell) => {
  const cellId = focusCell.cellId < (columns.length - 1) ? ++focusCell.cellId : focusCell.cellId
  return Object.assign({},
    focusCell,
    { cellId }
  )
}

export const rowDown = (row, focusCell) => {
  const rowId = focusCell.rowId < (row.length - 1) ? ++focusCell.rowId : focusCell.rowId
  return Object.assign({},
    focusCell,
    { rowId }
  )
}

export const rowLeft = (columns, focusCell) => {
  const cellId = focusCell.cellId > 0 ? --focusCell.cellId : focusCell.cellId
  return Object.assign({},
    focusCell,
    { cellId }
  )
}