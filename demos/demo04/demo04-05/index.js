var vm = new Vue({
  el: '#app',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})

console.log(vm.fullName) // => 'Foo Bar'
vm.fullName = 'Tom John'
console.log(vm.fullName) // => 'Tom John'