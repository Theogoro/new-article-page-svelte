<script>
  import Nav from "../components/Nav.svelte";
  import Ad from "../components/Ad.svelte";
  import Body from "../components/Body.svelte";
  import Footer from "../components/Footer.svelte";
  //image
  import AdPony from "../images/ads/Ad-Pony.png";
</script>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    font-family: "Playfair Display", georgia, "times new roman", times, serif;
    text-align: justify;
  }
  :global(a, p, strong) {
    font-size: 1.4rem;
  }

  .App {
    background-color: #f7f7f7;
  }

  @media (max-width: 768px) {
    :global(*) {
      font-size: 14px;
    }
  }
  @media (max-width: 480px) {
    :global(*) {
      font-size: 12px;
    }
  }
  @media (max-width: 320px) {
    :global(*) {
      font-size: 10px;
    }
  }
</style>

<div class="App">
  <Nav />
  <Ad adImage={AdPony} />
  <Body />
  <Footer />
</div>
