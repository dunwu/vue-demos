<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <drawer v-if="isMobile" :openDrawer="collapsed" @change="onDrawerChange">
      <sider-menu
        :theme="theme"
        :menuData="menuData"
        :collapsed="false"
        :collapsible="false"
        @menuSelect="onMenuSelect"
      />
    </drawer>
    <sider-menu
      :theme="theme"
      v-else-if="layout === 'side'"
      :menuData="menuData"
      :collapsed="collapsed"
      :collapsible="true"
    />
    <drawer
      :open-drawer="showSetting"
      placement="right"
      @change="onSettingDrawerChange"
    >
      <div class="setting" slot="handler">
        <a-icon :type="showSetting ? 'close' : 'setting'" />
      </div>
      <setting />
    </drawer>
    <a-layout>
      <global-header
        :menuData="menuData"
        :collapsed="collapsed"
        @toggleCollapse="toggleCollapse"
      />
      <a-layout-content
        :style="{ minHeight: minHeight, margin: '24px 24px 0' }"
      >
        <nuxt />
      </a-layout-content>
      <global-footer :link-list="linkList" :copyright="copyright" />
    </a-layout>
  </a-layout>
</template>

<script>
import SiderMenu from '../components/menu/SiderMenu'
import Setting from '../components/setting/Setting'
import Drawer from '../components/tool/Drawer'
import GlobalFooter from './GlobalFooter'
import GlobalHeader from './GlobalHeader'
import MenuVIew from './MenuVIew'
import RouteView from './RouteView'

const minHeight = window.innerHeight - 64 - 24 - 122

let menuData = []

export default {
  name: 'GlobalLayout',
  components: { Setting, SiderMenu, Drawer, GlobalFooter, GlobalHeader },
  computed: {
    isMobile() {
      return this.$store.state.setting.isMobile
    },
    theme() {
      return this.$store.state.setting.theme
    },
    layout() {
      return this.$store.state.setting.layout
    },
    linkList() {
      return this.$store.state.setting.footerLinks
    },
    copyright() {
      return this.$store.state.setting.copyright
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed
    },
    onDrawerChange(show) {
      this.collapsed = show
    },
    onMenuSelect() {
      this.toggleCollapse()
    },
    onSettingDrawerChange(val) {
      this.showSetting = val
    }
  },
  beforeCreate() {
    console.log('beforeCreate routes', this.$router.options.routes)
    // menuData = this.$router.options.routes
    menuData = [
      {
        path: '/',
        name: '首页',
        icon: 'none',
        invisible: true
      },
      {
        path: '/components',
        name: '组件',
        icon: 'none',
        component: MenuVIew,
        children: [
          {
            path: '/components/feedback',
            name: 'feedback',
            icon: 'none',
            children: [
              {
                name: 'drawer',
                path: '/components/feedback/drawer',
                component: () => import('@/pages/components/feedback/drawer'),
                icon: 'none'
              }
            ]
          }
        ]
      },
      {
        path: '/exception',
        name: '异常页',
        icon: 'warning',
        component: RouteView,
        children: [
          {
            name: '404',
            component: () => import('@/pages/exception/404'),
            icon: 'none',
            path: '/exception/404'
          }
        ]
      }
    ]
  },
  data() {
    return {
      minHeight: minHeight + 'px',
      collapsed: false,
      menuData: menuData,
      showSetting: false
    }
  }
}
</script>

<style lang="less" scoped>
.setting {
  background-color: #1890ff;
  color: #fff;
  border-radius: 5px 0 0 5px;
  line-height: 40px;
  font-size: 22px;
  width: 40px;
  height: 40px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
}
</style>
