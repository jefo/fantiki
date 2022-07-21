<script>
	import Layer from "./components/Layer.svelte";
</script>

<main>
	<div class="flex">
		<div class="w-3/4 p-2">
			<div class="content-center">Drop Images Here</div>
		</div>
		<div class="w-1/4">
			<div class="text-lg">Layers</div>
			<div class="pr-4">
				<div class="mb-2">
					<Layer title="Backgrounds" />
				</div>
				<div class="mb-2">
					<Layer title="Backgrounds" />
				</div>
				<div class="mb-2">
					<Layer title="Backgrounds" />
				</div>
				<div class="mb-2">
					<Layer title="Backgrounds" />
				</div>
			</div>
		</div>
	</div>
</main>
<style windi:preflights:global windi:safelist:global>
</style>