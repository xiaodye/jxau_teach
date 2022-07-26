const path = require("path")

module.exports = {
  webpack: {
    alias: {
      "@": path.join(__dirname, "src"),
      "~": path.join(__dirname, "public"),
    },
  },
}
