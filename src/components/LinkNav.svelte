<script>
  export let color = "primary";
  export let mr = 0;
  export let block = false;
  export let link;
</script>

<a
  href={link}
  class:block
  class="btn mr-{mr} bg-{color} flex border border-secondary border-2 justify-between w-full px-4 py-2 font-medium tracking-wide text-black capitalize transition-colors duration-200 transform -md focus:outline-none focus:ring-opacity-80"
>
  <slot />
</a>

<style>
  .btn {
    /* background-color: rgb(99, 230, 190); */
    /* border: 2px solid rgb(24, 49, 83); */
    border-radius: 12px;
  }
</style>
