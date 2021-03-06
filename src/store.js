import {writable, get} from 'svelte/store'

export const position = writable({row: 0, column: 0})

export const data = writable({
  columns: ['A', 'B', 'C'],
  rows: [
    [
      {value: '1', type: 'number'},
      {value: '2', type: 'number'},
      {value: '3', type: 'number'}
    ],
    [
      {value: '4', type: 'number'},
      {value: '5', type: 'number'},
      {value: '=A2 + B2', type: 'expr'}
    ],
  ]
})

export function focus(row, column) {
  const {rows} = get(data)

  rows[row][column].node.focus()

  position.set({row, column})
}

export function moveRight() {
  const {row, column} = get(position)
  const {columns} = get(data)

  if (column < columns.length-1) {
    focus(row, column+1)
  }
}

export function moveLeft() {
  const {row, column} = get(position)

  if (column > 0) {
    focus(row, column-1)
  }
}

export function moveUp() {
  const {row, column} = get(position)

  if (row > 0) {
    focus(row-1, column)
  }
}

export function moveDown() {
  const {row, column} = get(position)
  const {rows} = get(data)

  if (row < rows.length-1) {
    focus(row+1, column)
  } else {
    appendRow()
    setTimeout(() => {
      focus(row+1, column)
    }, 0)
  }
}

function appendRow() {
  data.update(data => {
    const row = data.columns.map(() => ({value: ''}))
    data.rows.push(row)
    return data
  })
}
