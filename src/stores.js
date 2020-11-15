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
    viewZoom: 5,
  },
  {
    id: "tnm-C0037186",
    point: [35.823403, 137.960503],
    imageUrl: "https://image.tnm.jp/image/1024/C0037186.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0037186",
    viewZoom: 5,
  },
  {
    id: "tnm-C0023848",
    point: [40.884402, 140.33894],
    imageUrl: "https://image.tnm.jp/image/1024/C0023848.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0023848",
    viewZoom: 5,
  },
  {
    id: "tnm-E0032574",
    point: [37.296393, 139.994168],
    imageUrl: "https://image.tnm.jp/image/1024/E0032574.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/E0032574",
    viewZoom: 5,
  },
  {
    id: "tnm-E0062392",
    point: [43.212416, 141.003862],
    imageUrl: "https://image.tnm.jp/image/1024/E0062392.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/E0062392",
    viewZoom: 5,
  },
  {
    id: "tnm-E0033565",
    point: [35.472386, 139.610767],
    imageUrl: "https://image.tnm.jp/image/1024/E0033565.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/E0033565",
    viewZoom: 5,
  },
  {
    id: "tnm-C0087019",
    point: [35.123572, 136.948317],
    imageUrl: "https://image.tnm.jp/image/1024/C0087019.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0087019",
    viewZoom: 5,
  },
  {
    id: "tnm-C0086966",
    point: [35.736181, 140.202346],
    imageUrl: "https://image.tnm.jp/image/1024/C0086966.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0086966",
    viewZoom: 5,
  },
  {
    id: "tnm-E0065254",
    point: [39.417056, 140.531956],
    imageUrl: "https://image.tnm.jp/image/1024/E0065254.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/E0065254",
    viewZoom: 5,
  },
  {
    id: "tnm-C0064933",
    point: [36.390536, 138.888436],
    imageUrl: "https://image.tnm.jp/image/1024/C0064933.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0064933",
    viewZoom: 5,
  },
  {
    id: "tnm-E0019906",
    point: [36.379504, 137.162811],
    imageUrl: "https://image.tnm.jp/image/1024/E0019906.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/E0019906",
    viewZoom: 5,
  },
  {
    id: "tnm-C0086979",
    point: [37.864584, 140.915515],
    imageUrl: "https://image.tnm.jp/image/1024/C0086979.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0086979",
    viewZoom: 5,
  },
  {
    id: "tnm-E0065233",
    point: [35.584251, 139.249157],
    imageUrl: "https://image.tnm.jp/image/1024/E0065233.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/E0065233",
    viewZoom: 5,
  },
  {
    id: "tnm-E0024221",
    point: [34.437623, 133.266587],
    imageUrl: "https://image.tnm.jp/image/1024/E0024221.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/E0024221",
    viewZoom: 5,
  },
  {
    id: "tnm-C0025828",
    point: [36.82554, 140.111243],
    imageUrl: "https://image.tnm.jp/image/1024/C0025828.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0025828",
    viewZoom: 5,
  },
  {
    id: "tnm-E0019917",
    point: [35.070445, 137.807909],
    imageUrl: "https://image.tnm.jp/image/1024/E0019917.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/E0019917",
    viewZoom: 5,
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
