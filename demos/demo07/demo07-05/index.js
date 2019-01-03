var vm = new Vue({
  el: '#v-for-object',
  data: {
    items: [
      {
        name: 'Anika'
      }
    ]
  }
})
Vue.set(vm.items[0], 'age', 27)
vm.items[0] = Object.assign({}, vm.items[0], {
  age: 27,
  favoriteColor: 'Vue Green'
})