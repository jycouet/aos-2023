<script>
  import { page } from "$app/stores";
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
<a href="/info">About</a>

<hr />

<slot />
