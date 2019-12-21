<script>
  import Grid from './components/Grid.svelte'
  import {focus, moveRight, moveLeft, moveUp, moveDown} from './store'

  function handleKeydown(e){
    switch(e.key) {
      case 'ArrowRight':
        moveRight()
        break
      case 'ArrowLeft':
        moveLeft()
        break
      case 'ArrowUp':
        moveUp()
        break
      case 'ArrowDown':
        moveDown()
        break

      default:
        return
    }

    e.preventDefault()
  }
</script>

<svelte:window on:keydown={handleKeydown} on:click={() => focus(0, 0)}/>

<main>
  <Grid/>
</main>
