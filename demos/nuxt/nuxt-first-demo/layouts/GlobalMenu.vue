<template>
  <a-menu
    theme="dark"
    :default-selected-keys="['1']"
    :open-keys="openKeys"
    mode="inline"
    @openChange="onOpenChange"
  >
    <a-menu-item key="home">
      <a-icon type="home" />
      <span><a href="/">Home</a></span>
    </a-menu-item>
    <a-sub-menu key="components">
      <span slot="title">
        <a-icon type="thunderbolt" />
        <span>Components</span>
      </span>
      <a-sub-menu key="general">
        <span slot="title"><span>General</span></span>
        <a-menu-item key="button">
          <a href="/components/general/button">Button</a>
        </a-menu-item>
        <a-menu-item key="icon">
          <a href="/components/general/icon">Icon</a>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="feedback">
        <span slot="title"><span>Feedback</span></span>
        <a-menu-item key="drawer">
          <a href="/components/feedback/drawer">Drawer</a>
        </a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
  </a-menu>
</template>
<script>
export default {
  name: 'GlobalMenu',
  data() {
    return {
      rootSubmenuKeys: ['home', 'components'],
      openKeys: ['home']
    }
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      )
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  }
}
</script>

<!--<style>-->
<!--.ant-badge #numberStyle {-->
<!--backgroundcolor: #1890ff;-->
<!--color: #fff;-->
<!--boxshadow: '0 0 0 1px #d9d9d9 inset';-->
<!--}-->
<!--</style>-->
