<script>
  export let icon = "";
  export let title = "";
  export let description;
</script>

<style>
  .Description-item {
    padding: 10px;
    display: flex;
    flex-direction: column;
    /* border: solid 2px; */
    border-radius: 5px;
    min-height: 320px;
    box-sizing: border-box;
    max-width: 280px;
    margin: 0 auto;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.5);
  }
  .Description-item-icon {
    margin: 15px 0;
    font-size: 30px !important;
    display: flex;
    justify-content: center;
    color: rgb(90, 90, 90);
  }
  .Description-item-description,
  .Description-item-title {
    text-align: center;
  }
  @media (max-width: 850px) {
    .Description-item {
      max-width: 320px;
    }
    * {
      font-size: 20px;
    }
    * .Description-item-icon i {
      font-size: 30px;
    }
  }
</style>

<div class="Description-item">
  <div class="Description-item-icon">
    <i class={icon} />
  </div>
  <h2 class="Description-item-title">{title}</h2>
  <p class="Description-item-description">{description}</p>
</div>
