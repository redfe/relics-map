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

  let iconElement;
  let marker;
  onMount(() => {
    const icon = L.divIcon({
      className: "relic-icon",
      html: iconElement,
      iconSize: iconSize,
    });
    marker = L.marker(point, { icon: icon }).addTo(map);
  });
  onDestroy(() => {
    if (marker) marker.remove();
  });
</script>

<style>
  :global(.relic-icon) {
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.5);
  }
</style>

<a
  bind:this={iconElement}
  href={srcUrl}
  target="_blank"
  rel="noopener noreferrer">
  <!-- svelte-ignore a11y-missing-attribute -->
  <img width={iconSize[0] + 'px'} height={iconSize[1] + 'px'} src={imageUrl} />
</a>
