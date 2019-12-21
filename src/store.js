import {writable} from 'svelte/store'

export const data = writable({
  columns: ['A', 'B', 'C'],
  rows: [
    [1,2,3],
    [4,5,6],
    [4,5,6],
  ]
})
