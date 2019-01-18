<template>
  <div class="container" style="text-align: center;">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">回到首页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // 你可以为错误页面指定自定义的布局
}
</script>
