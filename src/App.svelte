<script>
	import { Provider } from "svelte-redux-connect";
	import { Router, Route } from "svelte-routing";
	import store from "./redux/store";
	import Button from "./components/Button.svelte";
	import Sources from "./pages/Sources";
	import Collection from "./pages/Collection.svelte";

	import Linkable from "./components/Linkable.svelte";

	let url = null;
</script>

<Provider {store}>
	<main>
		<Router {url}>
			<div>
				<nav class="flex pb-2 mx-auto justify-center w-3/4 px-4 pt-2 border-b border-b-border w-full">
					<div class="flex-grow-0 flex-shrink-1 flex justify-center">
						<!-- <Button mr=2>Sources</Button> -->
						<!-- <Button >Preview</Button> -->
						<Linkable link={"/"} mr=2>Source</Linkable>
						<Linkable link={"/preview"}>Preview</Linkable>
					</div>
				</nav>
				<Route path="/" component={Sources} />
				<Route path="/preview" component={Collection} />
			</div>
		</Router>
	</main>
</Provider>

<style windi:preflights:global windi:safelist:global>
	:global(html, body) {
		height: 100%;
	}

	main {
		font-family: Cera Round Pro Regular;
		background-color: rgb(240, 241, 243);
		color: rgb(24, 49, 83);
		height: 100%;
	}
</style>
