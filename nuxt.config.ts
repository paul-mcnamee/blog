import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.TITLE,
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.DESCRIPTION,
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/brands.css",
        integrity:
          "sha384-nT8r1Kzllf71iZl81CdFzObMsaLOhqBU1JD2+XoAALbdtWaXDOlWOZTR4v1ktjPE",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/fontawesome.css",
        integrity:
          "sha384-HbmWTHay9psM8qyzEKPc8odH4DsOuzdejtnr+OFtDmOcIVnhgReQ4GZBH7uwcjf6",
        crossorigin: "anonymous"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },

      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#FFFFFF"
  },

  /*
   ** Global CSS
   */
  css: ['vuetify/lib/styles/main.sass', "assets/main.css",],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/vuetify", '@/plugins/vue-gtag',],
  

  /*
   ** Nuxt.js modules
   */
  // modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // "@nuxtjs/axios",
    // TODO: ads are broken
    // ["@nuxtjs/google-analytics", {
    //   id: "UA-120955985-2"
    // }],
    // ["@nuxtjs/google-adsense", {
    //   id: "ca-pub-8331234367729530"
    // }]
  // ],

  // markdownit: {
  //   preset: "default",
  //   linkify: true,
  //   breaks: true,
  //   use: [
  //     "markdown-it-highlightjs"
  //   ]
  // },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify'],


    // TODO: probably need to do something here for loading images the new way that vue3 does it, however that is...

    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/
    //     });
    //   }

    //   const vueLoader = config.module.rules.find(
    //     rule => rule.loader === "vue-loader"
    //   );
    //   vueLoader.options.transformAssetUrls["img"] = ["src", "data-src"];
    // }
  },
  vite: {
    define: {
      'process.env.DEBUG': true,
    },
  },
});
