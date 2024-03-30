import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  css: ['~/assets/css/globals.css'],
  app: {
    head: {
      title: 'Kael Express',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0'
    }
  },
  routeRules: {
    '/products': {
      ssr: false
    },
    '/auth': {
      ssr: false
    },
    '/checkout': {
      ssr: false
    }
  },
  build: {
    transpile: ['vuetify']
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@pinia/nuxt'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
});
