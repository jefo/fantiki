<script>
	import {onMount} from 'svelte';
	import Accordion from 'accordion-js';
	import 'accordion-js/dist/accordion.min.css';
	import Layer from "./components/Layer.svelte";

	onMount(() => {
		new Accordion('.layers-list');
	})
</script>

<main>
	<div class="flex">
		<div class="w-1/4">
			<div class="text-lg">Layers</div>
			<div class="pr-4 layers-list">
				<div class="mb-2">
					<Layer id="1" title="Backgrounds" />
				</div>
				<div class="mb-2">
					<Layer id="2" title="Body" />
				</div>
				<div class="mb-2">
					<Layer title="Clothes" />
				</div>
				<div class="mb-2">
					<Layer id="3" title="Eyes" />
				</div> 
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