new Vue({
  el: '#app',
  methods: {
    onStop: function () {
      alert('call stop')
    },
    onSubmit: function () {
      alert('call onSubmit')
    },
    onStopPrevent: function () {
      alert('call onStopPrevent')
    },
    onCapture: function () {
      alert('call onCapture')
    },
    onSelf: function () {
      alert('call onSelf')
    },
    onOnce: function () {
      alert('call onOnce')
    },
    onScroll: function () {
      alert('call onScroll')
    }
  }
})
