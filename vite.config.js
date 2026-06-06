import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  base: "./",

  publicDir: "public",

  server: {
    open: "/index.html",
    host: true,
  },

  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    target: "es2015",
    assetsInlineLimit: 0, // disable base64 inline

    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
        ambassador: resolve(__dirname, "src/ambassador.html"),
        home: resolve(__dirname, "src/home.html"),
        invest: resolve(__dirname, "src/invest.html"),
        spiring: resolve(__dirname, "src/spiring.html"),
        support: resolve(__dirname, "src/support.html"),
        sustainability: resolve(__dirname, "src/sustainability.html"),
        text: resolve(__dirname, "src/text.html"),
      },

      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const extType = info[info.length - 1];

          if (/\.(css)$/i.test(assetInfo.name)) {
            return `css/[name][extname]`;
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name)) {
            return `img/[name][extname]`;
          }
          if (/\.(mp4|webm|ogg|avi)$/i.test(assetInfo.name)) {
            return `video/[name][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `fonts/[name][extname]`;
          }
          return `[name][extname]`;
        },
        chunkFileNames: "js/[name].js",
        entryFileNames: "js/[name].js",
      },
    },
  },
});
