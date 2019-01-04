Vue.component('alert-box', {
  template: `
    <div class="alert-box" style="background: #f3beb8; border: 1px solid #f09898;">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

new Vue({
  el: '#app'
})
