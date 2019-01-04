var vm = new Vue({
  el: '#app',
  data: {
    numbers: [1, 2, 3, 4, 5]
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})