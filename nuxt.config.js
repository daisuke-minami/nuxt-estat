import colors from 'vuetify/es5/util/colors'

export default {
  publicRuntimeConfig: {
    ESTAT_APPID: process.env.ESTAT_APPID,
    SITE_URL: process.env.SITE_URL,
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    },
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - type-test',
    title: 'type-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/composition-api', ssr: true, },
    { src: '@/plugins/estat', ssr: true, },
    {
      src: '@/plugins/highcharts-vue',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  router: {
    middleware: 'vuex' //????????????????????????????????????
  },

  axios: {
    proxy: true
  },

  proxy: {
    '/json/': {
      target: 'http://api.e-stat.go.jp/rest/3.0/app/json',
      pathRewrite: {
        '^/json/': '/',
      },
    },
  },

  generate: {
    interval: 2000,
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
