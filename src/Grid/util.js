import DefaultFormatter from './formatters/Default'
import CheckboxFormatter from './formatters/Checkbox'

const pushCheckboxColumn = (columns) => {
  return [
    {
      formatter: CheckboxFormatter,
      key: 'checked',
    },
    ...columns
  ]
}

export const createColumns = (columns) => {
  // set Default Formatter
  const copiedColumns = columns.map(column => Object.assign({}, { formatter: DefaultFormatter }, column));
  return pushCheckboxColumn(copiedColumns)
}

const pushCheckboxData = (row) => {
  return Object.assign({},
    {
      checked: false
    },
    row
  );
}

export const createData = (data) => {
  return data.map(row => { return Object.assign({}, pushCheckboxData(row)) })
}

export const createChildId = (parentId, index) => {
  return `${parentId}_${index}`
}

export const isFocus = (focusCell, rowId, cellId) => {
  return focusCell.rowId === rowId && focusCell.cellId === cellId;
}

export const isCheckBox = (formatter) => {
  return (CheckboxFormatter === formatter)
}

export const rowUp = (row, focusCell) => {
  const rowId = focusCell.rowId > 0 ? --focusCell.rowId : focusCell.rowId
  return Object.assign({},
    focusCell,
    { rowId }
  )
}

export const rowDown = (row, focusCell) => {
  const rowId = focusCell.rowId < (row.length - 1) ? ++focusCell.rowId : focusCell.rowId
  return Object.assign({},
    focusCell,
    { rowId }
  )
}

export const cellRight = (columns, focusCell) => {
  const cellId = focusCell.cellId < (columns.length - 1) ? ++focusCell.cellId : focusCell.cellId
  return Object.assign({},
    focusCell,
    { cellId }
  )
}

export const cellLeft = (columns, focusCell) => {
  const cellId = focusCell.cellId > 0 ? --focusCell.cellId : focusCell.cellId
  return Object.assign({},
    focusCell,
    { cellId }
  )
}

export const cellFirst = (focusCell) => {
  return Object.assign({},
    focusCell,
    { cellId: 0 }
  )
}

export const cellEnd = (columns, focusCell) => {
  return Object.assign({},
    focusCell,
    { cellId: columns.length - 1 }
  )
}

export const rowAndCellFirst = (focusCell) => {
  return Object.assign({},
    focusCell,
    {
      rowId: 0,
      cellId: 0
    }
  )
}

export const rowAndCellEnd = (row, columns, focusCell) => {
  return Object.assign({},
    focusCell,
    {
      rowId: row.length - 1,
      cellId: columns.length - 1
    }
  )
}