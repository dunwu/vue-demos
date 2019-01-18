<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo" />
      <global-menu></global-menu>
    </a-layout-sider>
    <a-layout>
      <global-header></global-header>
      <global-content></global-content>
      <global-footer></global-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import GlobalContent from './GlobalContent'
import GlobalFooter from './GlobalFooter'
import GlobalHeader from './GlobalHeader'
import GlobalMenu from './GlobalMenu'
export default {
  components: { GlobalMenu, GlobalContent, GlobalHeader, GlobalFooter },
  data() {
    return {
      collapsed: false
    }
  }
}
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
