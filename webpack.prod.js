const merge = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");
const prod = {
  mode: "production",
  optimization: {
    splitChunks: {
      name: "common",
      minSize: 0,
      chunks: "all",
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
};

module.exports = merge(common, prod);
