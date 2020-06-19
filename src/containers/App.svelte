<script>
  import Nav from "../components/Nav.svelte";
  import Maintitle from "../components/Maintitle.svelte";
  import NewContainer from "./NewContainer.svelte";
  import Image from "../components/Image.svelte";
  import Author from "../components/Author.svelte";
  import Date from "../components/Date.svelte";
  import Ad from "../components/Ad.svelte";
  import Problem from "../components/Problem.svelte";
  import Solution1 from "../components/Solution1.svelte";
  import Solution2 from "../components/Solution2.svelte";
  import Vs from "../components/Vs.svelte";
  import Footer from "../components/Footer.svelte";

  //image
  import TheoImage from "../images/Theo.png";
  import AdPony from "../images/ads/Ad-Pony.png";

  //data-sources
  import maintitleData from "../data/maintitle.json";
  import imagesData from "../data/imagesData.json";
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

  :global(.NewContainer-item p) {
    text-indent: 10px;
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
  <NewContainer>
    <div class="NewContainer-item">
      <Maintitle {...maintitleData} />
    </div>
    <Image {...imagesData.problemMainImage} />
    <div class="NewContainer-item">
      <Author author="Theo Berta - 6to P" image={TheoImage}>
        <Date />
      </Author>
    </div>
    <div class="NewContainer-item">
      <Problem />
    </div>
    <Image {...imagesData.officeImage} />
    <div class="NewContainer-item">
      <Solution1 />
    </div>
    <Image {...imagesData.homeOfficeImage} />
    <div class="NewContainer-item">
      <Solution2 />
    </div>
    <Image {...imagesData.versusImage} />
    <div class="NewContainer-item">
      <Vs />
    </div>
  </NewContainer>
  <Footer />
</div>
