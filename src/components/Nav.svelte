<script>
  import NavItem from "./NavItem.svelte";
  import NavFooter from "./NavFooter.svelte";
  import navItems from "../data/navItems.json";
  let Logo =
    "https://txt-dynamic.static.1001fonts.net/txt/b3RmLjcyLjAwMDAwMC5WR2hsSUVaaGJHUmhJRlJwYldWei4x/chomsky.regular.png";
</script>

<style>
  .Nav {
    display: flex;
    padding: 30px 15px 5px;
    align-items: center;
    border-bottom: 2px solid lightgrey;
  }
  .Nav-logo figure {
    height: 30px;
  }
  .Nav-logo img {
    height: 100%;
  }
  ul {
    height: max-content;
    margin-left: auto;
  }
  .Nav-Container {
    box-shadow: 0px -10px 20px 5px rgba(0, 0, 0, 1);
  }
  @media (max-width: 650px) {
    ul {
      display: none;
    }
    .Nav {
      z-index: 1;
      justify-content: center;
      align-items: center;
    }
  }
</style>

<div class="Nav-Container">
  <nav class="Nav" id="Nav">
    <div class="Nav-logo">
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
    </div>
    <ul>
      {#each navItems as navItem, i}
        <NavItem {...navItem} />
      {/each}
    </ul>
  </nav>
  <NavFooter />
</div>
