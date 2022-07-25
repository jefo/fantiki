<script>
	import { Router, Route, navigate } from "svelte-routing";
	import Sources from "./pages/Sources.svelte";
	import Collection from "./pages/Collection.svelte";
import Test from "./pages/Test.svelte";

	let url = null;
</script>

<main>
	<Router {url}>
		<div>
			<nav class="flex mx-auto justify-center w-3/4 px-4 pt-2">
				<div class="flex-grow-0 flex-shrink-1 flex justify-center">
					<button on:click="{() => navigate('/')}"
					class="btn-nav mr-2 block flex justify-between w-full px-4 py-2 font-medium tracking-wide text-black capitalize transition-colors duration-200 transform -md focus:outline-none focus:ring-opacity-80"
					>Sources</button
				>
				<button on:click="{() => navigate('/my-collection')}"
					class="btn-nav block flex justify-between w-full px-4 py-2 font-medium tracking-wide text-black capitalize transition-colors duration-200 transform -md focus:outline-none focus:ring-opacity-80"
					>My&nbsp;Collection</button
				>
				</div>
			</nav>
			<Route path="/" component={Sources} />
			<Route path="/my-collection" component={Collection} />
		</div>
	</Router>
</main>

<style windi:preflights:global windi:safelist:global>
	main {
		font-family: Cera Round Pro Regular;
	}

	.btn-nav {
        background-color: rgb(99, 230, 190);
        border: 2px solid rgb(24, 49, 83);
        border-radius: 12px;
    }
</style>
