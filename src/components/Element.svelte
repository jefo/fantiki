<script>
  import { onMount } from "svelte";

  let nft = [];
  export let newNft = [];

  onMount(() => {
    nft = newNft;
  });
</script>

<div class="element">
  {#each nft as nft}
    <img class="element__img" src={nft} alt="NFT" />
  {:else}
    <p>NFT</p>
  {/each}
  <!-- <img class="element__img" src={nft} alt="NFT" /> -->
</div>

<style>
  .element {
    position: relative;
  }
  .element__img {
    position: absolute;
    max-height: 200px;
  }
</style>
