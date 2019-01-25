const pkg = require('./package')

module.exports = {
  mode: 'spa',

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
  loading: { color: 'cyan' },

  /*
   ** Global CSS
   */
  css: ['ant-design-vue/dist/antd.css', '@/assets/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/antd-ui'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true,
    retry: { retries: 3 },
    //开发模式下开启debug
    debug: process.env._ENV == 'development' ? false : true,
    //设置不同环境的请求地址
    baseURL: 'http://localhost:8080/api'
    // withCredentials: true
  },

  /*
   ** Build configuration
   */
  build: {
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
        })
      }
    }
  },

  proxy: {
    //开启代理
    '/api': {
      target: 'http://localhost:8080/',
      pathRewrite: { '^/api': '/' }
    }
  },

  styleResources: {
    less: './assets/**/*.less'
  }
}
