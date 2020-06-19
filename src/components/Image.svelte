<script>
  export let url;
  export let caption = {};
  export let alt = "Image";
</script>

<style>
  .Image {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .Image img {
    width: 100%;
  }
  figcaption {
    width: 98%;
    margin: 10px auto 0;
  }
  figcaption p {
    /* text-justify: inter-character; */
    font-weight: 100;
    color: #666;
    font-size: 0.95rem;
  }
  p span {
    color: #888;
    font-size: 0.7rem;
    margin-left: 0.5rem;
  }
</style>

<figure class="Image">
  <img src={url} {alt} />
  {#if caption.text}
    <figcaption>
      <p>
        {caption.text}
        {#if caption.author}
          <span>{caption.author}</span>
        {/if}
      </p>
    </figcaption>
  {/if}
</figure>
