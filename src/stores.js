import { writable } from "svelte/store";

const data = [
  {
    id: "tnm-C0076882",
    point: [35.743478, 138.487513],
    imageUrl: "https://image.tnm.jp/image/1024/C0076882.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0076882",
    viewZoom: 8,
  },
  {
    id: "tnm-C0067240",
    point: [40.651142, 140.690509],
    imageUrl: "https://image.tnm.jp/image/1024/C0067240.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0067240",
    viewZoom: 7,
  },
  {
    id: "tnm-C0081789",
    point: [35.934496, 140.37195],
    imageUrl: "https://image.tnm.jp/image/1024/C0081789.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0081789",
    viewZoom: 6,
  },
  {
    id: "tnm-C0081784",
    point: [35.731473, 139.229677],
    imageUrl: "https://image.tnm.jp/image/1024/C0081784.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0081784",
    viewZoom: 5,
  },
  {
    id: "5",
    point: [35.045007, 138.083886],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
    viewZoom: 7,
  },
  {
    id: "tnm-C0000012",
    point: [35.427923, 138.930522],
    imageUrl: "https://image.tnm.jp/image/1024/C0000012.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0000012",
    viewZoom: 6,
  },
  {
    id: "tnm-C0000015",
    point: [38.073368, 139.608734],
    imageUrl: "https://image.tnm.jp/image/1024/C0000015.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0000015",
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
