<script>
  import { L, key } from "./leaflet.js";
  import { onMount, setContext } from "svelte";
  import { relics } from "./stores.js";
  import YearControl from "./YearControl.svelte";
  import KindControl from "./KindControl.svelte";

  let map;
  let zoom = 6;
  let year = -12000;

  let extractCondition = {
    zoom: zoom,
    year: year,
    kind: "土器",
  };

  setContext(key, {
    getMap: () => map,
    getExtractCondition: () => extractCondition,
  });

  onMount(() => {
    relics.extract(extractCondition);
    map = L.map("mapcontainer", {
      zoomControl: true,
      maxZoom: 18,
      minZoom: 6,
    });
    var mpoint = [37.8627, 139.6072];
    map.setView(mpoint, zoom);
    map.on("zoomend", (e) => {
      extractCondition.zoom = map.getZoom();
      relics.extract(extractCondition);
    });
    L.tileLayer("https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}", {
      attribution:
        "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a> | <a href='http://webarchives.tnm.jp/'/>東京国立博物館 研究情報アーカイブス</a>",
    }).addTo(map);
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
</svelte:head>

<div id="mapcontainer" style="position:absolute;top:0;left:0;right:0;bottom:0;">
  {#if map}
    <YearControl min={-16000} max={-2400} {year} step={100} />
    <KindControl />
    <slot />
  {/if}
</div>
