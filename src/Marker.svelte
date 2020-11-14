<script>
  import { L, key } from "./leaflet";
  import { getContext } from "svelte";

  const iconSize = [50, 50];
  const { getMap } = getContext(key);
  const map = getMap();

  // [緯度,経度]
  export let point;
  export let title;

  const icon = L.divIcon({
    className: "icon",
    iconSize: iconSize,
  });
  L.marker(point, { icon: icon, title: title }).addTo(map);
</script>

<style>
  :global(.icon) {
    background-color: red;
    border-radius: 50%;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
  }
</style>
