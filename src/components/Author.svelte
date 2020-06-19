<script>
  export let image;
  export let author;
</script>

<style>
  .Author {
    display: grid;
    grid-template: repeat(2, 25px) / 50px 1fr;
    grid-template-areas:
      "photo author"
      "photo date";
    grid-gap: 5px;
  }
  figure {
    grid-area: photo;
  }
  figure img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    filter: grayscale();
  }
  .Author-text {
    grid-area: author;
    display: flex;
    align-items: center;
    border-bottom: 2px solid lightgray;
  }
  p {
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    line-height: 0.7rem;
    text-indent: 0 !important;
  }
</style>

<div class="Author">
  <figure>
    <img src={image} alt="Author" />
  </figure>
  <div class="Author-text">
    <p>Por {author}</p>
  </div>
  <slot />
</div>
