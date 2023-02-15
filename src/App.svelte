<script>
  import { Provider } from "svelte-redux-connect";
  import { Router, Route } from "svelte-routing";
  import store from "./redux/store";
  import LinkNav from "./components/LinkNav.svelte";
  import Sources from "./pages/Sources";
  import Collection from "./pages/Collection";

  let url = null;
</script>

<Provider {store}>
  <main>
    <Router {url}>
      <nav
        class="flex pb-2 mx-auto justify-center w-3/4 px-4 pt-2 border-b border-b-border w-full"
      >
        <div class="flex-grow-0 flex-shrink-1 flex justify-center">
          <LinkNav link="/" mr="2">Sources</LinkNav>
          <LinkNav link="/preview">Preview</LinkNav>
        </div>
      </nav>
      <Route path="/" component={Sources} />
      <Route path="/preview" component={Collection} />
    </Router>
  </main>
</Provider>

<style windi:preflights:global windi:safelist:global>
  :global(html) {
    display: block;
  }
  :global(body) {
    height: 100%;
    display: flex;
  }

  main {
    display: block;
    font-family: Cera Round Pro Regular;
    background-color: rgb(240, 241, 243);
    color: rgb(24, 49, 83);
    width: 100%;
  }
</style>
