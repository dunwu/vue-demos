<template>
  <a-card title="按钮">
    <a-card title="按钮类型">
      <div>
        <a-button type="primary">Primary</a-button>
        <a-button>Default</a-button>
        <a-button type="dashed">Dashed</a-button>
        <a-button type="danger">Danger</a-button>
      </div>
    </a-card>
    <br />
    <a-card title="按钮组合">
      <div id="components-button-demo-button-group">
        <h4>Basic</h4>
        <a-button-group>
          <a-button>Cancel</a-button>
          <a-button type="primary">OK</a-button>
        </a-button-group>
        <a-button-group>
          <a-button disabled>L</a-button>
          <a-button disabled>M</a-button>
          <a-button disabled>R</a-button>
        </a-button-group>
        <a-button-group>
          <a-button type="primary">L</a-button>
          <a-button>M</a-button>
          <a-button>M</a-button>
          <a-button type="dashed">R</a-button>
        </a-button-group>

        <h4>With Icon</h4>
        <a-button-group>
          <a-button type="primary"> <a-icon type="left" />Go back </a-button>
          <a-button type="primary">
            Go forward<a-icon type="right" />
          </a-button>
        </a-button-group>
        <a-button-group>
          <a-button type="primary" icon="cloud" />
          <a-button type="primary" icon="cloud-download" />
        </a-button-group>
      </div>
    </a-card>
    <br />
    <a-card title="不可用状态">
      <div>
        <a-button type="primary">Primary</a-button>
        <a-button type="primary" disabled>Primary(disabled)</a-button>
        <br />
        <a-button>Default</a-button>
        <a-button disabled>Default(disabled)</a-button>
        <br />
        <a-button type="dashed">Dashed</a-button>
        <a-button type="dashed" disabled>Dashed(disabled)</a-button>
        <div
          :style="{
            padding: '8px 8px 0 8px',
            background: 'rgb(190, 200, 200)'
          }"
        >
          <a-button ghost>Ghost</a-button>
          <a-button ghost disabled>Ghost(disabled)</a-button>
        </div>
      </div>
    </a-card>
    <br />
    <a-card title="幽灵按钮">
      <div
        :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }"
      >
        <a-button type="primary" ghost>Primary</a-button>
        <a-button ghost>Default</a-button>
        <a-button type="dashed" ghost>Dashed</a-button>
        <a-button type="danger" ghost>danger</a-button>
      </div>
    </a-card>
    <br />
    <a-card title="图标按钮">
      <div>
        <a-button type="primary" shape="circle" icon="search"></a-button>
        <a-button type="primary" icon="search">Search</a-button>
        <a-button shape="circle" icon="search" />
        <a-button icon="search">Search</a-button>
        <a-button shape="circle" icon="search" />
        <a-button icon="search">Search</a-button>
        <a-button type="dashed" shape="circle" icon="search" />
        <a-button type="dashed" icon="search">Search</a-button>
      </div>
    </a-card>
    <br />
    <a-card title="加载中状态">
      <div>
        <a-button type="primary" loading> Loading </a-button>
        <a-button type="primary" size="small" loading> Loading </a-button>
        <br />
        <a-button type="primary" :loading="loading" @mouseenter="enterLoading">
          mouseenter me!
        </a-button>
        <a-button
          type="primary"
          icon="poweroff"
          :loading="iconLoading"
          @click="enterIconLoading"
        >
          延迟1s
        </a-button>
        <br />
        <a-button shape="circle" loading />
        <a-button type="primary" shape="circle" loading />
      </div>
    </a-card>
  </a-card>
</template>

<script>
export default {
  transition: { name: 'fade', mode: 'out-in' },
  data() {
    return {
      loading: false,
      iconLoading: false
    }
  },
  methods: {
    enterLoading() {
      this.loading = true
    },
    enterIconLoading() {
      this.iconLoading = { delay: 1000 }
    }
  }
}
</script>

<style scoped>
#components-button-demo-button-group h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-button-group h4:first-child {
  margin-top: 0;
}
#components-button-demo-button-group .ant-btn-group {
  margin-right: 8px;
}
</style>
