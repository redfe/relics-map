<script>
  import { getContext, onMount } from "svelte";
  import { L, key } from "./leaflet.js";
  const { getMap } = getContext(key);
  const map = getMap();
  let period = 10000;
  let periodControlElement;
  let sliderElement;
  let labelElement;
  const moveLabel = () => {
    const target = sliderElement;
    const min = target.min;
    const max = target.max;
    const value = target.value;
    const ratio = (value - min) / (max - min);
    const width = target.offsetWidth - 20;
    labelElement.style.marginLeft = 10 + width * ratio + "px";
  };
  onMount(() => {
    L.Control.PeriodSlider = L.Control.extend({
      onAdd: function (map) {
        const control = L.Util.extend(periodControlElement);
        L.DomEvent.disableClickPropagation(control);
        return control;
      },

      onRemove: function (map) {
        // Nothing to do here
      },
    });

    L.control.periodSlider = function (opts) {
      return new L.Control.PeriodSlider(opts);
    };
    const slider = L.control.periodSlider({ position: "topleft" });
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

<div bind:this={periodControlElement}>
  <input
    type="range"
    class="slider"
    min="3000"
    max="16000"
    step="1000"
    on:input={moveLabel}
    bind:value={period}
    bind:this={sliderElement} />
  <p class="label" bind:this={labelElement}>{period}年前</p>
</div>
