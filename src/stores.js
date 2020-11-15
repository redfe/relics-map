import { writable } from "svelte/store";

const data = [
  {
    point: [37.161832, 139.624411],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
  },
  {
    point: [36.410333, 137.372349],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
  },
  {
    point: [35.706928, 137.022597],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
  },
  {
    point: [36.427923, 137.930522],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
  },
  {
    point: [35.135058, 137.562754],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
  },
  {
    point: [35.427923, 138.930522],
    imageUrl: "https://image.tnm.jp/image/1024/C0089290.jpg",
    srcUrl: "https://webarchives.tnm.jp/imgsearch/show/C0089290",
  },
];

function createRelics() {
  const { subscribe, set, update } = writable(data);

  return {
    subscribe,
  };
}

export const relics = createRelics();
