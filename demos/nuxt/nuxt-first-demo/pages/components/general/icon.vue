<template>
  <a-card title="图标">
    <a href="/" slot="extra">回到首页</a>
    <div class="icons-list">
      <a-icon type="sync" spin />
      <a-icon type="loading" />
      <a-icon type="home" theme="twoTone" />
      <a-icon type="setting" theme="twoTone" />
      <a-icon type="smile" theme="twoTone" />
      <a-icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
      <a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
    </div>
  </a-card>
</template>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
