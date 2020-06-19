<script>
  export let adImage;
</script>

<style>
  .Ad {
    margin: 20px auto;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    cursor: pointer;
  }
  p {
    font-size: 0.6rem;
    color: rgba(0, 0, 0, 0.25);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  img {
    max-width: 720px;
    margin: 0 auto;
  }
  @media (max-width: 800px) {
    img {
      max-width: 100%;
      margin: 0;
    }
  }
</style>

<div class="Ad">
  <p>Advertisement</p>
  <img src={adImage} alt="adImage" />
</div>
