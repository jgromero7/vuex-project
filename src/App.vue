<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{ $store.getters.getMessage }}</p>
    <input v-model="message" type="text">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  created(){
    this.$store.commit('increment', 'Hola')
  },
  methods: {
    add: function() {

    }
  },
  computed: {
    message: {
      set(value) {
        this.$store.commit('increment', value)
      },
      get() {
        return this.$store.getters.getMessage
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
