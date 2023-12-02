<script lang="ts">
  import { page } from "$app/stores";
  import { route } from "$lib/ROUTES";

  export let form;
</script>

<h2>So, how was <span class="wow">{$page.params.name}</span> ?</h2>

<form
  method="POST"
  action={route("checking /aos/day-01/elf-[name]", { name: $page.params.name })}
>
  <button>Check</button>
</form>
{#if form}
  <pre>{JSON.stringify(form)}</pre>
{/if}

<style>
  pre {
    font-size: xx-large;
  }
  .wow {
    color: #ff3e00;
  }
</style>
