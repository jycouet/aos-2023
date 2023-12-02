<script>
  import { route } from "$lib/ROUTES";
  import santa_svelte from "$lib/assets/santa-svelte.png";
</script>

<svelte:head>
  <link rel="icon" href={santa_svelte} />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
  />
  <title>AoS</title>
</svelte:head>

<h1>Advent of Svelte <em>- Kit Routes</em></h1>

<a href={route("/")}>Home</a> |
<a href={route("/about")}>About</a>

<hr />

<slot />
