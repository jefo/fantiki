<script>
	import { Dropzone } from "dropzone";
	import {onMount} from 'svelte';
	import Layer from "./components/Layer.svelte";

	onMount(() => {
		const dropzone = new Dropzone("#images", { url: "/file/post" });
	});

	let expandedId = null;

	const layers = [
		{ id: 1, title: 'Backgrounds' },
		{ id: 2, title: 'Body' },
		{ id: 3, title: 'Clothes' },
		{ id: 4, title: 'Eyes' },
	];
</script>

<main>
	<div class="flex p-4">
		<div class="w-1/4">
			<div class="text-lg">Layers</div>
			<div class="pr-4 layers-list">
				{#each layers as item}
					<div class="mb-2">
						<Layer 
							id={item.id} 
							title={item.title} 
							expanded={expandedId === item.id} 
							on:chevron={() => expandedId === item.id ? expandedId = null : expandedId = item.id}
						/>
					</div>
				{/each}
			</div>
		</div>
		<div class="w-3/4 p-2">
			<div id="images" class="content-center">
				<label
						class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
						<span class="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
								stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
							</svg>
							<span class="font-medium text-gray-600">
								Drop files to Attach, or
								<span class="text-blue-600 underline">browse</span>
							</span>
						</span>
						<input type="file" name="file_upload" class="hidden">
					</label>
			</div>
		</div>
	</div>
</main>
<style windi:preflights:global windi:safelist:global>
	main {
		font-family: Cera Round Pro Regular;
	}
</style>