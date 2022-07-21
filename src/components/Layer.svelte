<script>
    export let title = 'No title';
    export let count = 0;
    export let rarity = 100;
</script>

<button class="block flex justify-between w-full px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    <span>{title}</span>
    <span class="flex-1 flex-shrink-0"></span>
    <span class="text-xs border rounded p-1 mr-1">{count}</span>
    <span class="text-xs border rounded p-1">{rarity}</span>
</button>
