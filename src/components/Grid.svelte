<script>
  import Cell from './Cell.svelte'
  import {data} from '../store'

  function persist(node, cell) {
    cell.node = node
  }
</script>

<table>
  <thead>
    <tr>
      <th width="60"/>
      {#each $data.columns as column}
        <th>{column}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each $data.rows as row, i}
      <tr>
        <th>{i+1}</th>

        {#each row as cell, j}
          <td class="input" tabindex={i} use:persist={cell}><Cell bind:cell={cell}/></td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    border-spacing: 0px;
    width: 100%;
  }

  table td, table th {
    border: solid 1px #ddd
  }

  table th {
    background: #ccc;
    padding: 0.3em;
  }

  table tbody th {
    text-align: right
  }

  table tr.header {
    background: #666;
    color: #eee;
    font-size: 0.8rem;
  }
  table tr.header td {
    text-align: left;
    padding: 0.4rem
  }
  table td.label {
    text-align: left;
    background: #ccc
  }
  table td {
    padding: 0.3em;
    text-align: right
  }
  table td:focus {
    outline: 1px solid torquoise;
  }
  table td.input {
    padding: 0;
  }

  table select {
    background: transparent;
    border: none;
    margin: 0;
    display: block;
  }
</style>
