<script>
  export let title;
</script>

<style>
  .Description-list {
    max-width: 800px;
    margin: 40px auto;
  }
  .Description-list-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    grid-gap: 20px;
  }
  h2 {
    margin-bottom: 5px;
    text-align: center;
    font-size: 1.4rem;
  }
  @media (max-width: 850px) {
    .Description-list-container {
      grid-template-columns: 1fr;
    }
    h2 {
      font-size: 20px;
    }
  }
</style>

<div class="Description-list">
  {#if title}
    <h2>{title}</h2>
  {/if}
  <div class="Description-list-container">
    <slot />
  </div>
</div>
