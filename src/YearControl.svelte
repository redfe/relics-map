<script>
  import { getContext, onMount } from "svelte";
  import { L, key } from "./leaflet.js";
  import { relics } from "./stores.js";
  export let min = -16000;
  export let max = -3000;
  export let step = 1000;
  export let year = -10000;
  const { getMap } = getContext(key);
  const map = getMap();
  let controlElement;
  let sliderElement;
  let labelElement;

  $: {
    relics.year(year);
    moveLabel();
  }

  const moveLabel = () => {
    const target = sliderElement;
    if (!target) return;
    const min = target.min;
    const max = target.max;
    const value = target.value;
    const ratio = (value - min) / (max - min);
    const width = target.offsetWidth - 20;
    labelElement.style.marginLeft = 10 + width * ratio + "px";
  };

  onMount(() => {
    L.Control.YearSlider = L.Control.extend({
      onAdd: function (map) {
        const control = L.Util.extend(controlElement);
        L.DomEvent.disableClickPropagation(control);
        return control;
      },

      onRemove: function (map) {
        // Nothing to do here
      },
    });

    L.control.yearSlider = function (opts) {
      return new L.Control.YearSlider(opts);
    };

    const slider = L.control.yearSlider({ position: "topleft" });
    slider.addTo(map);
    moveLabel();
  });
</script>

<style>
  .slider {
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    outline: none;
    background: white;
    border-radius: 10px;
    border: solid 2px silver;
    width: 15em;
  }
  .label {
    position: absolute;
    width: 6em;
    margin-top: 0.2em;
    font-size: 1.5em;
    color: rgb(0, 117, 255);
    user-select: none;
  }
</style>

<div bind:this={controlElement}>
  <input
    type="range"
    class="slider"
    {min}
    {max}
    {step}
    bind:value={year}
    bind:this={sliderElement} />
  <p class="label" bind:this={labelElement}>{-year}年前</p>
</div>
