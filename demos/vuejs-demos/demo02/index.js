var data = {foo: 'origin'}
var vm = new Vue({
  el: '#app',
  data: data,
  /* 生命周期函数开始 */
  beforeCreate: function() {
    console.log('beforeCreate')
  },
  created: function () {
    console.log('created')
    console.log('foo is: ' + this.foo)
  },
  beforeMount: function() {
    console.log('beforeMount')
  },
  mounted: function () {
    console.log('mounted')
  },
  beforeUpdate: function () {
    console.log('beforeUpdate')
  },
  updated: function () {
    console.log('updated')
  },
  beforeDestroy: function () {
    console.log('beforeDestroy')
  },
  destroyed: function () {
    console.log('destroyed')
  }
  /* 生命周期函数结束 */
})

vm.$data === data // => true
vm.$el === document.getElementById('app') // => true

// $watch 是一个实例方法
vm.$watch('foo', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})