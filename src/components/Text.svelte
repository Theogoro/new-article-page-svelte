<script>
  export let id = "";
</script>

<div class={`text ${id}`} {id}>
  <slot />
</div>
