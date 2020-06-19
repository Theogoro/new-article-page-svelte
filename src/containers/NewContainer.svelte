<style>
  .NewContainer {
    margin: 0 auto;
    padding: 40px 20px 20px 20px;
    background-color: white;
  }
  :global(.NewContainer .NewContainer-item) {
    width: 600px;
    margin: 40px auto;
  }
  :global(.NewContainer-item p) {
    text-indent: 20px;
  }

  @media (max-width: 600px) {
    .NewContainer {
      padding: 10px;
    }
    :global(.NewContainer .NewContainer-item) {
      width: 100%;
      margin: 20px auto;
    }
  }
</style>

<div class="NewContainer">
  <slot />
</div>
