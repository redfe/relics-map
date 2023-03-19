import { writable } from "svelte/store";
import { data } from "./data.js";

function createRelics() {
  const { subscribe, set, update } = writable(data);

  const zoomFilter = (zoom) => (relic) =>
    zoom ? relic.viewZoom <= zoom : true;

  const yearFilter = (year) => (relic) =>
    year ? relic.period.from <= year && year <= relic.period.to : true;

  const kindFilter = (kind) => (relic) =>
    kind ? relic.kinds.indexOf(kind) >= 0 : true;

  return {
    subscribe,
    extract: ({ zoom, year, kind }) => {
      set(
        data
          .filter(zoomFilter(zoom))
          .filter(yearFilter(year))
          .filter(kindFilter(kind))
      );
    },
  };
}

export const relics = createRelics();
