var vm = new Vue({
  el: '#app',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})

console.log(vm.fullName) // => 'Foo Bar'
vm.fullName = 'Tom John'
console.log(vm.fullName) // => 'Foo Bar'