<script>
  import Map from "./Map.svelte";
  import RelicMarker from "./RelicMarker.svelte";
  import PeriodControl from "./PeriodControl.svelte";
  import { relics } from "./stores.js";
</script>

<Map>
  <PeriodControl />
  {#each $relics as relic (relic.id)}
    <RelicMarker
      point={relic.point}
      imageUrl={relic.imageUrl}
      srcUrl={relic.srcUrl} />
  {/each}
</Map>
