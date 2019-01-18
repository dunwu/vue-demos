<template>
  <a-layout-footer>
    Vue/Nuxt/Antd Demo ©2019 Created by Zhang Peng
  </a-layout-footer>
</template>

<script>
export default {
  name: 'GlobalFooter',
  props: ['copyright', 'linkList']
}
</script>

<style>
.ant-layout-footer {
  text-align: center;
}
</style>
