<template>
  <a-card title="Drawer 抽屉">
    <a-card title="基础抽屉">
      <div>
        <a-button type="primary" @click="showDrawer"> Open </a-button>
        <a-drawer
          title="Basic Drawer"
          placement="right"
          :closable="false"
          @close="onClose"
          :visible="visible"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </a-drawer>
      </div>
    </a-card>
    <br />
    <a-card title="自定义位置">
      <div>
        <a-radio-group
          style="margin-right: 8px"
          :defaultValue="placement"
          @change="onChange"
        >
          <a-radio value="top">top</a-radio>
          <a-radio value="right">right</a-radio>
          <a-radio value="bottom">bottom</a-radio>
          <a-radio value="left">left</a-radio>
        </a-radio-group>
        <a-button type="primary" @click="showDrawer"> Open </a-button>
        <a-drawer
          title="Basic Drawer"
          :placement="placement"
          :closable="false"
          @close="onClose"
          :visible="visible"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </a-drawer>
      </div>
    </a-card>
  </a-card>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      placement: 'left',
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px'
      },
      pStyle2: {
        marginBottom: '24px'
      }
    }
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    onChange(e) {
      this.placement = e.target.value
    }
  }
}
</script>
