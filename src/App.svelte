<script>
  import Map from "./Map.svelte";
  import RelicMarker from "./RelicMarker.svelte";
  import YearControl from "./YearControl.svelte";
  import { relics } from "./stores.js";
</script>

<Map>
  <YearControl min={-16000} max={-3000} year={-12000} step={1000} />
  {#each $relics as relic (relic.id)}
    <RelicMarker
      point={relic.point}
      imageUrl={relic.imageUrl}
      srcUrl={relic.srcUrl} />
  {/each}
</Map>
