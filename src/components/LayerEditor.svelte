<script>
  import { faPlus } from "@fortawesome/free-solid-svg-icons";
  import { createEventDispatcher } from "svelte";
  import Fa from "svelte-fa";

  export let title = "";

  const dispatch = createEventDispatcher();

  const handleSubmit = () => {
    if (!title) {
      return;
    }
    dispatch("commit", title);
    title = "";
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div
    class="editor flex items-center justify-between w-full flex justify-between w-full px-4 py-2 font-medium tracking-wide text-black capitalize transition-colors duration-200 transform -md focus:outline-none focus:ring-opacity-80"
  >
    <input
      bind:value={title}
      class="w-full flex-grow-1 rounded px-2 mr-1"
      placeholder="New Layer"
      type="text"
    />
    <button class="flex flex-col align-middle">
      <Fa icon={faPlus} />
    </button>
  </div>
</form>

<style>
  .editor {
    background-color: rgb(99, 230, 190);
    border: 2px solid rgb(24, 49, 83);
    border-radius: 12px;
  }

  input {
    border: 1px solid #183153;
  }
</style>
