module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  css: [
    '~/css/bootstrap.css',
    '~/css/custom.scss',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  plugins: [
    './plugins/mixins/user.js',
    './plugins/mixins/validation.js',
    './plugins/axios.js'
  ],

  axios: {
    baseURL: 'http://127.0.0.1:8000/api/v1'
  },

  auth: {
    endpoints: {
      login: {
        url: 'login', method: 'post', propertyName: 'meta.token'
      },
      user: {
        url: 'me', method: 'get', propertyName: 'data'
      },
      logout: {
        url: 'logout', method: 'post'
      }
    },
    redirect: {
      login: '/auth/signin',
      home: '/'
    }
  },

  /*
  ** Build configuration
  */
  build: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
