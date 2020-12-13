<script>
  import { getContext, onMount } from "svelte";
  import { L, key } from "./leaflet.js";
  import { relics } from "./stores.js";

  const kinds = [
    "土器",
    "土偶",
    "大珠",
    "土面",
    "土版",
    "角器",
    "釣針",
    "石器",
    "石鏃",
    "装飾",
    "垂飾",
    "骨角器",
  ];
  const { getMap, getExtractCondition } = getContext(key);
  const map = getMap();
  const extractCondition = getExtractCondition();

  let controlElement;
  let kind = extractCondition.kind;

  $: {
    extractCondition.kind = kind;
    relics.extract(extractCondition);
  }

  onMount(() => {
    L.Control.KindSelector = L.Control.extend({
      onAdd: function (map) {
        return L.Util.extend(controlElement);
      },

      onRemove: function (map) {},
    });

    L.control.kindSelector = function (opts) {
      return new L.Control.KindSelector(opts);
    };

    L.control.kindSelector({ position: "topleft" }).addTo(map);
  });
</script>

<div bind:this={controlElement}>
  <select bind:value={kind}>
    <option value={null}>種類を選択してください</option>
    {#each kinds as kind}
      <option value={kind}>{kind}</option>
    {/each}
  </select>
</div>
