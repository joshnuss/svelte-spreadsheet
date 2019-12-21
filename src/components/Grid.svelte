<script>
  import Cell from './Cell.svelte'
</script>

<table>
  <thead>
    <tr>
      <th width="60"/>
      <th>A</th>
      <th>B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td class="input" tabindex="1"><Cell/></td>
      <td class="input" tabindex="1"><Cell/></td>
    </tr>
    <tr>
      <th>2</th>
      <td class="input" tabindex="2"><Cell/></td>
      <td class="input" tabindex="2"><Cell/></td>
    </tr>
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
    padding: 0.2em;
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
