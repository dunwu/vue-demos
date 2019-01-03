new Vue({
  el: '#app',
  methods: {
    keyupQ: function () {
      alert('call keyupQ')
    },
    keyupEnter: function () {
      alert('call keyupEnter')
    },
    doCtrl: function () {
      alert('call doCtrl')
    },
    doAltC: function () {
      alert('call doAltC')
    },
    onClick: function () {
      alert('call onClick')
    },
    onCtrlClick: function () {
      alert('call onCtrlClick')
    },
  }
})
Vue.config.keyCodes.f1 = 99
