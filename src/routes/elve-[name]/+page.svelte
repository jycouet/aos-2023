<script lang="ts">
  import { page } from "$app/stores";
  import { route } from "$lib/ROUTES";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h2>{$page.params.name}</h2>

<form method="POST" action={route("update /elve-[name]", { name: "JYC" })}>
  <button>Save</button>
</form>
