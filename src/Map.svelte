<script>
  import * as L from "leaflet";
  import { onMount } from "svelte";
  onMount(() => {
    let map;
    map = L.map("mapcontainer", {
      zoomControl: true,
      maxZoom: 8,
      minZoom: 5,
    });
    var mpoint = [35.8627, 139.6072];
    map.setView(mpoint, 15);
    L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
      attribution:
        "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>",
    }).addTo(map);
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
</svelte:head>

<div
  id="mapcontainer"
  style="position:absolute;top:0;left:0;right:0;bottom:0;" />
