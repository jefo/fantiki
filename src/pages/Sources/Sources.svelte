<script>
    import Layer from "../../components/Layer.svelte";
    import LayerEditor from "../../components/LayerEditor.svelte";
    import UploadDropzone from "../../components/UploadDropzone.svelte";

    export let layers = [];
    export let images = {};
    export let addLayer = null;
    export let removeLayer = null;
    export let addImage = null;

    let expanded = [];

    const handleAddLayer = ({ detail }) => {
        const id = layers.length;
        addLayer({
            id,
            title: detail,
        });
        expanded = [...expanded, id];
    };

    const handleUpload = (layerId, file) => {
        addImage({ layerId, path: file.path, data: file.data });
    };

    const hideFiles = (layerId) => {
        return images[layerId] && Object.keys(images[layerId]).length > 0;
    };
</script>

<div class="container mx-auto w-3/4 p-4">
    <LayerEditor on:commit={handleAddLayer} />
    <div class="mb-2" />
    {#each layers as item}
        <div class="mb-2">
            <Layer
                id={item.id}
                title={item.title}
                expanded={expanded.includes(item.id)}
                on:chevron={() => {
                    if (expanded.includes(item.id)) {
                        expanded = expanded.filter((id) => id !== item.id);
                    } else {
                        expanded = [...expanded, item.id];
                    }
                }}
            >
                <div class="content-center mt-2">
                    <div class:hidden={hideFiles(item.id)}>
                        <UploadDropzone
                            on:upload={({ detail }) =>
                                handleUpload(item.id, detail)}
                        />
                    </div>
                    {#if images[item.id]}
                        <div class="grid grid-cols-7 gap-2">
                            {#each Object.values(images[item.id]) as img}
                                <img src={img} />
                            {/each}
                        </div>
                    {/if}
                </div>
            </Layer>
        </div>
    {/each}
</div>
