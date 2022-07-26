<script>
    import LayerEditor from "../components/LayerEditor.svelte";
    import Layer from "../components/Layer.svelte";
    import UploadDropzone from "../components/UploadDropzone.svelte";

    let layers = [
        // { id: 1, title: "Backgrounds" },
        // { id: 2, title: "Body" },
        // { id: 3, title: "Clothes" },
        // { id: 4, title: "Eyes" },
    ];
    let expandedId = null;

    const handleAddLayer = ({ detail }) => {
        layers = [
            ...layers,
            {
                id: layers.length,
                title: detail,
            },
        ];
        expandedId = layers[layers.length - 1].id;
        console.log("add layer", layers);
    };

    const images = {};
    const handleUpload = ({ detail }) => {
        images[detail.path] = detail.data;
        // console.log('detail', detail);
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
                expanded={expandedId === item.id}
                on:chevron={() =>
                    expandedId === item.id
                        ? (expandedId = null)
                        : (expandedId = item.id)}
            >
                <div class="content-center mt-2">
                    <div class:hidden={Object.keys(images).length > 0}>
                        <UploadDropzone on:upload={handleUpload} />
                    </div>
                    <div class="grid grid-cols-7">
                        {#each Object.values(images) as img}
                            <img src={img} />
                        {/each}
                    </div>
                </div>
            </Layer>
        </div>
    {/each}
</div>
