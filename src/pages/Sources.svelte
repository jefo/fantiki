<script>
    import { onMount } from "svelte";
    import LayerEditor from "../components/LayerEditor.svelte";
    import Button from "../components/Button.svelte";
    import Layer from "../components/Layer.svelte";

    const images = {};
    let layers = [
        // { id: 1, title: "Backgrounds" },
        // { id: 2, title: "Body" },
        // { id: 3, title: "Clothes" },
        // { id: 4, title: "Eyes" },
    ];
    let expandedId = null;

    // onMount(() => {
    //     window.addEventListener(
    //         "dragover",
    //         function (e) {
    //             e = e || event;
    //             e.preventDefault();
    //         },
    //         false
    //     );
    //     window.addEventListener(
    //         "drop",
    //         function (e) {
    //             e = e || event;
    //             e.preventDefault();
    //         },
    //         false
    //     );

    //     var dropzone = document.querySelector("#dropzone");
    //     var filelist = document.querySelector("#filelist");

    //     // https://gist.github.com/tiff/3076863
    //     var traverseFileTree = function self(item, path) {
    //         path = path || "";
    //         if (item.isFile) {
    //             // Get file
    //             item.file(function (file) {
    //                 var li = document.createElement("li");
    //                 li.innerText = path + file.name;
    //                 filelist.appendChild(li);
    //             });
    //         } else if (item.isDirectory) {
    //             // Get folder contents
    //             var dirReader = item.createReader();
    //             dirReader.readEntries(function (entries) {
    //                 for (var i = 0; i < entries.length; i++) {
    //                     self(entries[i], path + item.name + "/");
    //                 }
    //             });
    //         }
    //     };

    //     var dropEvent = function (e) {
    //         var length = e.dataTransfer.items.length;
    //         for (var i = 0; i < length; i++) {
    //             // recursive directory search
    //             traverseFileTree(e.dataTransfer.items[i].webkitGetAsEntry());
    //         }

    //         dropzone.classList.remove("hover");
    //         e.stopPropagation();
    //         e.preventDefault();
    //         return false;
    //     };

    //     var dragEnter = function (e) {
    //         dropzone.classList.add("hover");
    //         e.stopPropagation();
    //         e.preventDefault();
    //     };

    //     var dragOver = function (e) {
    //         e.stopPropagation();
    //         e.preventDefault();
    //     };

    //     var dragLeave = function (e) {
    //         dropzone.classList.remove("hover");
    //         e.stopPropagation();
    //         e.preventDefault();
    //     };

    //     dropzone.addEventListener("dragenter", dragEnter, false);
    //     dropzone.addEventListener("dragover", dragOver, false);
    //     dropzone.addEventListener("dragleave", dragLeave, false);
    //     dropzone.addEventListener("drop", dropEvent, false);
    // });

    const handleFilesChange = (e) => {
        const files = e.target.files;
        for (const file of files) {
            const fr = new FileReader();
            fr.onload = () => {
                images[file.webkitRelativePath] = fr.result;
            };
            fr.readAsDataURL(file);
        }
    };

    const handleAddLayer = ({ detail }) => {
        layers = [
            ...layers,
            {
                id: layers.length,
                title: detail,
            },
        ];
        console.log("add layer", layers);
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
                <!-- <div class="grid grid-cols-7">
                    {#each Object.values(images) as img}
                        <img src={img} />
                    {/each}
                </div> -->
            </Layer>
        </div>
    {/each}

    <div id="filelist" />
</div>
