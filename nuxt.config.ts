// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'virtual:windi.css',
    'virtual:windi-devtools',
  ],
  modules: [
    'nuxt-windicss',
    '@vite-pwa/nuxt',
  ],
  pwa: {
    /* PWA options */
  },
  typescript: {
    strict: true
  }
})
