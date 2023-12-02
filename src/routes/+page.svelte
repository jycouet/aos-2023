<script>
  import { route } from "$lib/ROUTES";

  let take = 7;
</script>

<h2>Advent of Svelte</h2>

<ul>
  <li>
    Rules: <a target="_blank" href={route("link_aos")}>Advent of Svelte</a>
  </li>
  <li>
    <div class="flex">
      <a href={route("/aos/day-01", { take })}>Day 01</a>
      <i>How many to show?</i>
      <input type="number" bind:value={take} />
    </div>
  </li>

  <li>
    <a href={route("/aos/day-02")}>Day 02</a>
  </li>
</ul>

<style>
  .flex {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
</style>
