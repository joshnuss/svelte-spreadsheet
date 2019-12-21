import {writable} from 'svelte/store'

export const data = writable({
  columns: ['A', 'B', 'C'],
  rows: [
    [{value: 1},{value: 2}, {value: 3}],
    [{value: 4},{value: 5}, {value: 6}],
  ]
})
