<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">nuxt-first-demo</h1>
      <p>{{ content }}</p>
      <button @click="increment">{{ counter }}</button>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Logo
  },
  fetch({ store }) {
    store.commit('increment')
  },
  computed: mapState(['counter']),
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  },
  asyncData({ app }) {
    return app.$axios
      .get(`http://localhost:8080/api/hello`)
      .then(res => {
        return { content: res.data }
      })
      .catch(e => {
        console.error({ statusCode: 404, message: 'Post not found' })
      })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
