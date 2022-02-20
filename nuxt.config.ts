import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  head() {
    return {
      bodyAttrs: {
          class: 'h-full'
      },
      htmlAttrs: {
          class: 'h-full bg-gray-100'
      }
    }
  },
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  buildModules: [
    ['@pinia/nuxt', { disableVuex: true }]
  ],
});