<script>
  export let cell
</script>

<span>{cell.value}</span>

<style>
  input {
    border: none;
    margin: 0;
    display: block;
    width: 100%;
  }

  span, input {
    padding: 0.4em;
  }

  input:focus {
    outline: none;
  }

  input.number {
    text-align: right;
  }
</style>
