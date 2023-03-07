<script>
  import Fa from "svelte-fa";
  // import DragDropList from "svelte-dragdroplist";
  import DragAndDropList from "../../components/Sortable.svelte";
  import Layer from "../../components/Layer.svelte";
  import LayerEditor from "../../components/LayerEditor.svelte";
  import UploadDropzone from "../../components/UploadDropzone.svelte";
  import { faGear } from "@fortawesome/free-solid-svg-icons";
  import Sortable from "../../components/Sortable.svelte";

  export let layers = [];
  export let images = {};
  export let selectedLayer = null;
  export let addLayer = null;
  export let setLayers = null;
  export let removeLayer = null;
  export let addImage = null;
  export let selectLayer = null;

  const handleAddLayer = ({ detail }) => {
    const id = Date.now();
    addLayer({
      id,
      title: detail,
    });
  };

  const handleUpload = (layerId, file) => {
    addImage({ layerId, path: file.path, data: file.data });
  };

  const hideFiles = (layerId) => {
    return images[layerId] && Object.keys(images[layerId]).length > 0;
  };

  const handleOrderChange = ({ detail }) => {
    setLayers(detail);
  };
</script>

<div class="container mx-auto flex p-4">
  <div class="w-1/3">
    <LayerEditor on:commit={handleAddLayer} />
    <div class="mb-2" />
    <Sortable let:item on:orderChanged={handleOrderChange} bind:items={layers}>
      <div class="mb-2">
        <Layer id={item.id} on:click={() => selectLayer(item)}>
          {item.title}
        </Layer>
      </div>
    </Sortable>
  </div>
  <div class="w-3/4 px-4">
    {#if selectedLayer}
      <div
        class="flex justify-between items-center border border-secondary border-2 rounded-lg px-2"
      >
        <div class="flex items-center">
          <h1 class="text-lg">{selectedLayer.title}&nbsp;Layer</h1>
          <span>&nbsp;|&nbsp;{images.length}&nbsp;images</span>
        </div>
        <div class="flex-grow-1 flex-shrink-0" />
        <button>
          <Fa icon={faGear} />
        </button>
      </div>
      <!-- class:hidden={hideFiles(selectedLayer.id)} -->
      {#if images.length}
        <div class="grid grid-cols-7 gap-2">
          {#each images as img}
            <img src={img} alt="" />
          {/each}
        </div>
      {/if}
      <div class="content-center mt-2">
        <div>
          <UploadDropzone
            on:upload={({ detail }) => handleUpload(selectedLayer.id, detail)}
          />
        </div>
      </div>
    {/if}
  </div>
</div>
