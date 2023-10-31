import siteData from "./siteData.json";

function importAll(r) {
  const images = {};

  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });

  return images;
}

export const images = importAll(require.context("../assets", true, /\.jpg$/));
