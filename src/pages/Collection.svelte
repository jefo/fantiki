<script>
    import Layer from "../components/Layer.svelte";

    let expandedId = null;

    const layers = [
        { id: 1, title: "Backgrounds" },
        { id: 2, title: "Body" },
        { id: 3, title: "Clothes" },
        { id: 4, title: "Eyes" },
    ];

    let items = [
        { title: "Body Type 1", count: 10, rarity: 100 },
        { title: "Body Type 2", count: 12, rarity: 100 },
        { title: "Body Type 3", count: 15, rarity: 100 },
    ];
</script>

<div class="flex p-4">
    <div class="w-1/4">
        <div class="text-lg">Layers 1</div>
        <div class="pr-4 layers-list">
            {#each layers as item}
                <div class="mb-2">
                    <Layer
                        id={item.id}
                        title={item.title}
                        expanded={expandedId === item.id}
                        on:chevron={() =>
                            expandedId === item.id
                                ? (expandedId = null)
                                : (expandedId = item.id)}
                    >
                        {#each items as item, index}
                            <div class="flex p-2">
                                <input
                                    type="checkbox"
                                    id="cb-{item.id}-{index}"
                                />
                                <label for="cb-{item.id}-{index}"
                                    >{item.title}</label
                                >
                                <span class="flex-1 flex-shrink-0" />
                                <span
                                    class="badge text-xs border rounded p-1 mr-1"
                                    title="Images count">{item.count}</span
                                >
                                <span
                                    class="badge text-xs border rounded p-1"
                                    title="Images rarity">{item.rarity}</span
                                >
                            </div>
                        {/each}
                    </Layer>
                </div>
            {/each}
        </div>
    </div>
    <div class="w-3/4">images</div>
</div>

<style>
</style>
