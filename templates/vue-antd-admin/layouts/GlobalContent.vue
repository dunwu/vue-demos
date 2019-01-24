<template>
  <a-layout-content style="margin: 0 16px">
    <global-breadcrumb></global-breadcrumb>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <nuxt />
    </div>
  </a-layout-content>
</template>

<script>
import GlobalBreadcrumb from './GlobalBreadcrumb'
export default {
  name: 'GlobalContent',
  components: { GlobalBreadcrumb }
}
</script>
