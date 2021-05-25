/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // "src/assets/js": { url: "/js" },
    'src': { url: "/" },
  },

  plugins: [
    [
      "@snowpack/plugin-webpack",
      {
        htmlMinifierOptions: false,
      },
    ],
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // bundle: true,
    entrypoints: ["./src/index.html"],
  },
  packageOptions: {
    polyfillNode: true,
  },
  buildOptions: {
    /* ... */
    // out: "./dist",
    clean: true,
    minify: false,
  },
}
