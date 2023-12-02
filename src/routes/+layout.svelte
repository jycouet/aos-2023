<script>
  import { page } from "$app/stores";
  import { route } from "$lib/ROUTES";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
  />
  <title>Demo Kit Routes</title>
</svelte:head>

<h1>Welcome to Kit Routes</h1>
<pre>{$page.url}</pre>

<a href="/">Home</a> |
<a href={route("/aos", { take: 2 })}>aos</a>|
<a href={route("/about")}>About</a>

<hr />

<slot />
