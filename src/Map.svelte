<script>
  import { L, key } from "./leaflet.js";
  import { onMount, setContext } from "svelte";
  import { relics } from "./stores.js";
  setContext(key, {
    getMap: () => map,
  });
  let map;
  onMount(() => {
    map = L.map("mapcontainer", {
      zoomControl: true,
      maxZoom: 8,
      minZoom: 6,
    });
    var mpoint = [35.8627, 139.6072];
    map.setView(mpoint, 15);
    map.on("zoomend", (e) => {
      relics.zoom(map.getZoom());
    });
    L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
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
    <slot />
  {/if}
</div>
