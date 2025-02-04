const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/scss")],
  },
  reactStrictMode: true,
  output: "export",
};
