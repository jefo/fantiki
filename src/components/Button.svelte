<script>
    export let color = "";
</script>

<button
    on:click
    class="btn-nav mr-2 block flex justify-between w-full px-4 py-2 font-medium tracking-wide text-black capitalize transition-colors duration-200 transform -md focus:outline-none focus:ring-opacity-80"
>
    <slot />
</button>

<style>
    .btn-nav {
        background-color: rgb(99, 230, 190);
        border: 2px solid rgb(24, 49, 83);
        border-radius: 12px;
    }
</style>
