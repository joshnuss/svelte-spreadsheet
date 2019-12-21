<script>
  export let cell

  const navKeys = ['Escape', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
  let node, mode = 'display'

  function persist(node, cell) {
    cell.node = node
  }

  function isCharacterKeyPress(evt) {
    if (typeof evt.which == "undefined") {
      return true
    } else if (typeof evt.which == "number" && evt.which > 0) {
      return !evt.ctrlKey && !evt.metaKey && !evt.altKey && evt.which != 8;
    }
    return false
  }

  function handleKeydown(e) {
    if (e.key == "F2") {
      mode = mode == "display" ? "edit" : "display"
      e.preventDefault()
      return
    }

    if (mode == "edit" && navKeys.indexOf(e.key) > -1 ) {
      mode = "display"
      e.preventDefault()
      return
    }

    if (mode == "display" && navKeys.indexOf(e.key) == -1 && isCharacterKeyPress(e)) {
      mode = "edit"
      node.select()

      cell.value = e.key

      e.preventDefault()
    }
  }
</script>

<input use:persist={cell} bind:this={node} class:edit={mode == 'edit'} readonly={mode == 'display'} on:keydown={handleKeydown} bind:value={cell.value}/>

<style>
  input {
    border: none;
    margin: 0;
    display: block;
    width: 100%;
    padding: 0.4em;
  }

  input:focus {
    outline: 1px solid torquoise;
  }

  input.edit:focus {
    outline: none
  }

  input.number {
    text-align: right;
  }
</style>
