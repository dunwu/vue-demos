<template>
  <a-breadcrumb :routes="routes" style="margin: 16px 0">
    <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="paths.join('/')">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script>
export default {
  name: 'GlobalBreadcrumb',
  data() {
    return {
      routes: [
        {
          path: 'index',
          breadcrumbName: '首页'
        },
        {
          path: 'first',
          breadcrumbName: '一级面包屑'
        },
        {
          path: 'second',
          breadcrumbName: '当前页面'
        }
      ]
    }
  }
}
</script>
