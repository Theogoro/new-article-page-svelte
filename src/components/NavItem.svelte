<script>
  export let href, text;
</script>

<style>
  a {
    text-decoration: none;
    color: rgb(129, 129, 129);
    transition: 1s;
    font-size: 1rem;
  }
  .Nav-item {
    list-style-type: none;
    display: inline-block;
    margin: 0 10px;
  }
  .Nav-item-container {
    display: flex;
    flex-direction: column;
  }
  .Nav-item:first-child {
    margin-left: 0;
  }
  .Nav-item:last-child {
    margin-right: 0;
  }
  .Nav-item-line {
    transition: 1s;
    height: 2px;
    width: 0%;
    background-color: black;
  }
  .Nav-item:hover a {
    color: black;
  }
  .Nav-item:hover .Nav-item-line {
    width: 100%;
  }
</style>

<li class="Nav-item">
  <div class="Nav-item-container">
    <a {href}>{text}</a>
    <div class="Nav-item-line" />
  </div>
</li>
