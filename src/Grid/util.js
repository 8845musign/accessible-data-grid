export const createChildId = (parentId, index) => {
  return `${parentId}_${index}`
}

export const isFocus = (focusCell, rowId, cellId) => {
  return focusCell.rowId === rowId && focusCell.cellId === cellId;
}