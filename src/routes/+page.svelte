<script>
  import { route } from "$lib/ROUTES";

  let take = 7;
</script>

<h2>Advent of Svelte</h2>

<ul>
  <li>
    <div class="flex">
      <a href={route("/aos/day-01", { take })}>Day 01</a>
      <i>How many to show?</i>
      <input type="number" bind:value={take} />
    </div>
  </li>
</ul>

<style>
  .flex {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
</style>
