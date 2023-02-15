<script>
  import Fa from "svelte-fa";
  import { createEventDispatcher } from "svelte";
  import {
    faChevronDown,
    faChevronUp,
  } from "@fortawesome/free-solid-svg-icons";

  export let title = "No title";
  export let count = 0;
  export let rarity = 100;
  export let id = 0;
  export let expanded = false;

  const dispatch = createEventDispatcher();
</script>

<div>
  <button
    on:click
    class="layer block flex justify-between w-full px-4 py-2 font-medium tracking-wide text-black capitalize transition-colors duration-200 transform -md focus:outline-none focus:ring-opacity-80"
  >
    <slot />
    <!-- <span class="flex-1 flex-shrink-0"></span> -->
    <!-- <Fa
            icon={expanded ? faChevronUp : faChevronDown}
        /> -->
  </button>
  <!-- <div class:hidden={!expanded} class="dropdown">
        <slot />
    </div> -->
</div>

<style>
  .layer {
    background-color: rgb(255, 212, 59);
    border: 2px solid rgb(24, 49, 83);
    border-radius: 12px;
  }

  .badge {
    border: 1px solid rgb(24, 49, 83);
  }
</style>
