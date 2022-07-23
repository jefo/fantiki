<script>
    import Fa from 'svelte-fa';
    import {createEventDispatcher} from 'svelte';
    import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

    export let title = 'No title';
    export let count = 0;
    export let rarity = 100;
    export let id = 0;
    export let items = [
        { title: "Body Type 1", count: 10, rarity: 100 },
        { title: "Body Type 2", count: 12, rarity: 100 },
        { title: "Body Type 3", count: 15, rarity: 100 },
    ];
    export let expanded = false;

    const dispatch = createEventDispatcher();

</script>

<div>
    <button on:click={() => { dispatch('chevron') }} class="layer block flex justify-between w-full px-4 py-2 font-medium tracking-wide text-black capitalize transition-colors duration-200 transform -md focus:outline-none focus:ring-opacity-80">
        <span>{title}</span>
        <span class="flex-1 flex-shrink-0"></span>
        <Fa
            icon={expanded ? faChevronUp : faChevronDown}
        />
    </button>
    {#if expanded}
        <div class="dropdown">
            {#each items as item, index}
            <div class="flex p-2">
                <input type="checkbox" id="cb-{id}-{index}" />
                <label for="cb-{id}-{index}">{item.title}</label>
                <span class="flex-1 flex-shrink-0"></span>
                <span class="badge text-xs border rounded p-1 mr-1">{item.count}</span>
                <span class="badge text-xs border rounded p-1">{item.rarity}</span>
            </div>
            {/each}
        </div>
    {/if}
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
