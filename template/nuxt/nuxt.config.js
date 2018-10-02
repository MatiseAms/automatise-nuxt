const pkg = require('./package');
module.exports = {
  mode: '<%= mode %>',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000000' },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */

  modules: ['nuxt-rfg-icon', '@nuxtjs/manifest', '@nuxtjs/pwa'],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
		** Run StyleLint on save
		*/
    plugins: [],
    /*
		** PostCSS autoprefixer
		*/
    postcss: {
      plugins: {
        'postcss-preset-env': {
          browsers: ['last 2 versions', 'ie >= 9'],
          features: {
            customProperties: false
          }
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
    styleResources: {
      scss: './assets/scss/vars.scss'
    }
  },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '~assets/scss/app.scss',
      lang: 'scss'
    }
  ]
};
