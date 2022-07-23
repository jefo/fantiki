<script>
	import Layer from "./components/Layer.svelte";

	let expandedId = null;

	const layers = [
		{ id: 1, title: 'Backgrounds' },
		{ id: 2, title: 'Body' },
		{ id: 3, title: 'Clothes' },
		{ id: 4, title: 'Eyes' },
	];
</script>

<main>
	<div class="flex">
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
			<div class="content-center">Drop Images Here</div>
		</div>
	</div>
</main>
<style windi:preflights:global windi:safelist:global>
	main {
		font-family: Cera Round Pro Regular;
	}
</style>