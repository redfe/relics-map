import { writable } from "svelte/store";

const data = [
  {
    id: "1",
    point: [37.161832, 139.624411],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
    viewZoom: 8,
  },
  {
    id: "2",
    point: [36.410333, 137.372349],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
    viewZoom: 7,
  },
  {
    id: "3",
    point: [35.706928, 137.022597],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
    viewZoom: 6,
  },
  {
    id: "4",
    point: [36.427923, 137.930522],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
    viewZoom: 5,
  },
  {
    id: "5",
    point: [35.135058, 137.562754],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
    viewZoom: 7,
  },
  {
    id: "6",
    point: [35.427923, 138.930522],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
    viewZoom: 6,
  },
];

function createRelics() {
  const { subscribe, set, update } = writable(data);

  return {
    subscribe,
    zoom: (zoom) => {
      set(data.filter((relic) => relic.viewZoom <= zoom));
    },
  };
}

export const relics = createRelics();
