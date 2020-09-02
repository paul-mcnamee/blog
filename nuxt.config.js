const pkg = require("./package");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
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
        content: pkg.description
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
  css: ["vuetify/src/stylus/main.styl", "assets/main.css", "~/node_modules/highlight.js/styles/atom-one-dark.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/vuetify"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/markdownit",
    ["@nuxtjs/google-analytics", {
      id: "UA-120955985-2"
    }],
    ["@nuxtjs/google-adsense", {
      id: "ca-pub-8331234367729530"
    }]
  ],

  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    use: [
      "markdown-it-highlightjs"
    ]
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  generate: {
    fallback: true
  },

  /*
   ** Build configuration
   */
  build: {
    vendor: ["axios", "vuetify"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }

      const vueLoader = config.module.rules.find(
        rule => rule.loader === "vue-loader"
      );
      vueLoader.options.transformAssetUrls["img"] = ["src", "data-src"];
    }
  }
};
