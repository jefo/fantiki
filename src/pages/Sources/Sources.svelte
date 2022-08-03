<script>
    import Fa from "svelte-fa";
    import SortableList from "svelte-sortable-list";
    import { dndzone } from "svelte-dnd-action";
    import Layer from "../../components/Layer.svelte";
    import LayerEditor from "../../components/LayerEditor.svelte";
    import UploadDropzone from "../../components/UploadDropzone.svelte";
    import Button from "../../components/Button.svelte";
    import { faGear } from "@fortawesome/free-solid-svg-icons";

    export let layers = [];
    export let images = {};
    export let selectedLayer = null;
    export let addLayer = null;
    export let removeLayer = null;
    export let addImage = null;
    export let selectLayer = null;

    let expanded = [];

    const handleAddLayer = ({ detail }) => {
        const id = layers.length + 1;
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

    const sortList = ev => {layers = ev.detail};
</script>

<div class="container mx-auto flex p-4">
    <div class="w-1/3">
        <LayerEditor on:commit={handleAddLayer} />
        <div class="mb-2" />
        <SortableList on:sort={sortList} list={layers} let:item>
            <div class="mb-2">
                <Layer id={item.id} on:click={() => selectLayer(item)}>
                    {item.title}
                </Layer>
            </div>
        </SortableList>
    </div>
    <div class="w-3/4 px-4">
        {#if selectedLayer}
            <div
                class="flex justify-between items-center border border-secondary border-2 rounded-lg px-2"
            >
                <div class="flex items-center">
                    <h1 class="text-lg">{selectedLayer.title}&nbsp;Layer</h1>
                    <span>&nbsp;|&nbsp;9&nbsp;images</span>
                </div>
                <div class="flex-grow-1 flex-shrink-0" />
                <button>
                    <Fa icon={faGear} />
                </button>
            </div>
            <div class="content-center mt-2">
                <div class:hidden={hideFiles(selectedLayer.id)}>
                    <UploadDropzone
                        on:upload={({ detail }) =>
                            handleUpload(selectedLayer.id, detail)}
                    />
                </div>
            </div>
            {#if images.length}
                <div class="grid grid-cols-7 gap-2">
                    {#each images as img}
                        <img src={img} />
                    {/each}
                </div>
            {/if}
        {/if}
    </div>
</div>
