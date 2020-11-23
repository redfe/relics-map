import { writable } from "svelte/store";

const data = [
  // 東北方面
  {
    id: "tnm-C0035830",
    point: [40.143478, 140.787513],
    imageUrl: "https://image.tnm.jp/image/1024/C0035830.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0035830",
    viewZoom: 5,
  },
  {
    id: "tnm-C0042713",
    point: [40.343478, 139.787513],
    imageUrl: "https://image.tnm.jp/image/1024/C0042713.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0042713",
    viewZoom: 5,
  },
  {
    id: "tnm-C0021401",
    point: [37.743478, 139.587513],
    imageUrl: "https://image.tnm.jp/image/1024/C0021401.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0021401",
    viewZoom: 5,
  },
  {
    id: "tnm-C0023848",
    point: [37.943478, 140.787513],
    imageUrl: "https://image.tnm.jp/image/1024/C0023848.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0023848",
    viewZoom: 5,
  },
  {
    id: "tnm-C0043248",
    point: [38.943478, 140.787513],
    imageUrl: "https://image.tnm.jp/image/1024/C0043248.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0043248",
    viewZoom: 5,
  },
  // 関東方面
  {
    id: "tnm-C0043548",
    point: [35.943478, 139.787513],
    imageUrl: "https://image.tnm.jp/image/1024/C0043548.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0043548",
    viewZoom: 7,
  },
  {
    id: "tnm-C0017174",
    point: [36.543478, 140.487513],
    imageUrl: "https://image.tnm.jp/image/1024/C0017174.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0017174",
    viewZoom: 6,
  },
  {
    id: "tnm-C0025827",
    point: [35.343478, 140.287513],
    imageUrl: "https://image.tnm.jp/image/1024/C0025827.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0025827",
    viewZoom: 6,
  },
  {
    id: "tnm-C0066301",
    point: [36.043478, 140.987513],
    imageUrl: "https://image.tnm.jp/image/1024/C0066301.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0066301",
    viewZoom: 6,
  },
  // 長野方面
  {
    id: "tnm-E0032603",
    point: [36.343478, 138.287513],
    imageUrl: "https://image.tnm.jp/image/1024/E0032603.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/E0032603",
    viewZoom: 5,
  },
  {
    id: "tnm-E0048581",
    point: [35.543478, 138.087513],
    imageUrl: "https://image.tnm.jp/image/1024/E0048581.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/E0048581",
    viewZoom: 5,
  },
  {
    id: "tnm-E0065111",
    point: [35.743478, 137.587513],
    imageUrl: "https://image.tnm.jp/image/1024/E0065111.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/E0065111",
    viewZoom: 7,
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
