<script lang="ts">
  import { route } from "$lib/ROUTES";
  import { onMount } from "svelte";
  import { Log, cyanBright, red, sleep } from "@kitql/helpers";
  import { enhance } from "$app/forms";

  export let form;

  const updateCookies = async () => {
    await fetch(route("GET /aos/day-02"));
    await sleep(300);
    updateCookies();
  };

  onMount(async () => {
    updateCookies();

    new Log("Advent of Svelte").info(
      cyanBright("Not in the console!, In cookies 🍪")
    );
  });
</script>

<h2>Day 02</h2>

Guess how many cookies Santa ate ? 🍪

<form method="POST" action={route("check /aos/day-02")} use:enhance>
  <input type="number" name="guess" placeholder="???" min="0" required />
  <button type="submit">Guess</button>
</form>

{#if form}
  <pre>{JSON.stringify(form)}</pre>
{/if}
