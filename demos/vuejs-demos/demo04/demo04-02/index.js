var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello'
  },
  methods: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})