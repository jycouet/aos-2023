<script lang="ts">
  import { page } from "$app/stores";
  import { route } from "$lib/ROUTES";
  import type { PageData } from "./$types";

  export let data: PageData;

  let take = $page.url.searchParams.get("take") ?? 4;
</script>

{#each data.elves.splice(0, take) as elve}
  <div>
    <a href={route("/aos/day-01/elf-[name]", { name: elve.name })}>
      {elve.name}
    </a>
  </div>
{/each}
