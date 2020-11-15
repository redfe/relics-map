<script>
  import Map from "./Map.svelte";
  import RelicMarker from "./RelicMarker.svelte";
  import { relics } from "./stores.js";
</script>

<Map>
  {#each $relics as relic (relic.id)}
    <RelicMarker
      point={relic.point}
      imageUrl={relic.imageUrl}
      srcUrl={relic.srcUrl} />
  {/each}
</Map>
