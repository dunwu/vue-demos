<template>
  <div
    :style="{
      width: '300px',
      border: '1px solid #d9d9d9',
      borderRadius: '4px'
    }"
  >
    <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
  </div>
</template>
<script>
export default {
  transition: { name: 'fade', mode: 'out-in' },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode)
    }
  }
}
</script>
