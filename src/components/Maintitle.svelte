<script>
  export let title;
  export let description;
  export let category;
</script>

<style>
  h1 {
    font-weight: bold;
    font-style: italic;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    line-height: 3rem;
    font-family: Georgia, "Times New Roman", Times, serif;
    text-align: center;
  }
  p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 100;
  }
  .Maintitle {
    margin-bottom: 30px;
  }
  .Maintitle-category {
    font-weight: bolder;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 auto 10px 0;
  }
</style>

<div class="Maintitle">
  <div class="Maintitle-category">{category}</div>
  <h1>{title}</h1>
  <p>{description}</p>
</div>
