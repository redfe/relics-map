<script>
  import { L, key } from "./leaflet";
  import { getContext, onDestroy, onMount } from "svelte";

  const iconSize = [80, 80];
  const { getMap } = getContext(key);
  const map = getMap();

  // [緯度,経度]
  export let point;
  export let imageUrl;
  export let srcUrl;

  const iconElement = document.createElement("a");
  iconElement.href = srcUrl;
  iconElement.target = "_blank";
  iconElement.rel = "noopener noreferrer";
  const imgElement = document.createElement("img");
  imgElement.width = iconSize[0];
  imgElement.height = iconSize[1];
  imgElement.src = imageUrl;
  iconElement.appendChild(imgElement);

  const icon = L.divIcon({
    className: "relic-icon",
    html: iconElement,
    iconSize: iconSize,
  });
  const marker = L.marker(point, { icon: icon }).addTo(map);

  onDestroy(() => {
    marker.remove();
  });
</script>

<style>
  :global(.relic-icon) {
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.5);
  }
</style>
