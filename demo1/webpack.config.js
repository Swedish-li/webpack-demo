const path = require("path");
const resolve = (p) => path.resolve(__dirname, p);

module.exports = {
  entry: {
    bundle1: resolve("./main1.js"),
    bundle2: resolve("./main2.js"),
  },
  output: {
    filename: "[name].js",
    path: resolve("dist"),
  },
};
