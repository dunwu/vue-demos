var vm = new Vue({
  el: '#app',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})

console.log(vm.fullName) // => 'Foo Bar'
vm.fullName = 'Tom John'
console.log(vm.fullName) // => 'Tom John'