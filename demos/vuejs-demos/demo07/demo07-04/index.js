var vm = new Vue({
  el: '#v-for-object',
  data: {
    items: ['a', 'b', 'c']
  }
})

// vm.items[1] = 'x' // 不是响应性的
// vm.items.length = 2 // 不是响应性的

Vue.set(vm.items, 0, 'x') // 是响应性的
vm.items.splice(2)