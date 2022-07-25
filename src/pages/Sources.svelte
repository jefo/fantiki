<script>
    import { onMount } from "svelte";

    const images = {};

    onMount(() => {
        window.addEventListener(
            "dragover",
            function (e) {
                e = e || event;
                e.preventDefault();
            },
            false
        );
        window.addEventListener(
            "drop",
            function (e) {
                e = e || event;
                e.preventDefault();
            },
            false
        );

        var dropzone = document.querySelector("#dropzone");
        var filelist = document.querySelector("#filelist");

        // https://gist.github.com/tiff/3076863
        var traverseFileTree = function self(item, path) {
            path = path || "";
            if (item.isFile) {
                // Get file
                item.file(function (file) {
                    var li = document.createElement("li");
                    li.innerText = path + file.name;
                    filelist.appendChild(li);
                });
            } else if (item.isDirectory) {
                // Get folder contents
                var dirReader = item.createReader();
                dirReader.readEntries(function (entries) {
                    for (var i = 0; i < entries.length; i++) {
                        self(entries[i], path + item.name + "/");
                    }
                });
            }
        };

        var dropEvent = function (e) {
            var length = e.dataTransfer.items.length;
            for (var i = 0; i < length; i++) {
                // recursive directory search
                traverseFileTree(e.dataTransfer.items[i].webkitGetAsEntry());
            }

            dropzone.classList.remove("hover");
            e.stopPropagation();
            e.preventDefault();
            return false;
        };

        var dragEnter = function (e) {
            dropzone.classList.add("hover");
            e.stopPropagation();
            e.preventDefault();
        };

        var dragOver = function (e) {
            e.stopPropagation();
            e.preventDefault();
        };

        var dragLeave = function (e) {
            dropzone.classList.remove("hover");
            e.stopPropagation();
            e.preventDefault();
        };

        dropzone.addEventListener("dragenter", dragEnter, false);
        dropzone.addEventListener("dragover", dragOver, false);
        dropzone.addEventListener("dragleave", dragLeave, false);
        dropzone.addEventListener("drop", dropEvent, false);
    });

    const handleFilesChange = (e) => {
        const files = e.target.files;
        console.log("files", files);
        for (const file of files) {
            const fr = new FileReader();
            fr.onload = () => {
                images[file.webkitRelativePath] = fr.result;
            };
            fr.readAsDataURL(file);
        }
    };
</script>

<div class="container mx-auto w-3/4 p-4">
    <label
        id="dropzone"
        class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
    >
        <span class="flex items-center space-x-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
            </svg>
            <span class="font-medium text-gray-600">
                Drop files to Attach, or
                <span class="text-blue-600 underline">browse</span>
            </span>
        </span>
        <input
            type="file"
            name="file_upload"
            class="hidden"
            webkitdirectory
            multiple
            on:change={handleFilesChange}
        />
    </label>

    <div class="grid grid-cols-7">
        {#each Object.values(images) as img}
            <img src={img} />
        {/each}
    </div>

    <div id="filelist" />
</div>
