export default {
  namespaced: true,
  state: {
    isMobile: false,
    theme: 'dark',
    layout: 'side',
    systemName: 'Vue Antd Admin',
    copyright: '2019 ZHANG PENG',
    footerLinks: [
      { link: 'https://github.com/vuejs/vue', icon: 'github', name: 'vue' },
      { link: 'https://github.com/nuxt/nuxt.js', icon: 'github', name: 'nuxt' },
      {
        link: 'https://github.com/vueComponent/ant-design-vue',
        icon: 'github',
        name: 'ant-design-vue'
      },
      {
        link: 'https://github.com/dunwu/vue-tutorial',
        icon: 'github',
        name: 'vue-tutorial'
      }
    ],
    multipage: true
  },
  mutations: {
    setDevice(state, isMobile) {
      state.isMobile = isMobile
    },
    setTheme(state, theme) {
      state.theme = theme
    },
    setLayout(state, layout) {
      state.layout = layout
    },
    setMultipage(state, multipage) {
      state.multipage = multipage
    }
  }
}
