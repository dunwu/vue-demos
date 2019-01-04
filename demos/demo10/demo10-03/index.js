Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

new Vue({
  el: '#app',
  data: {
    posts: [
      {id: 1, title: 'My journey with Vue'},
      {id: 2, title: 'Blogging with Vue'},
      {id: 3, title: 'Why Vue is so fun'}
    ]
  }
})
