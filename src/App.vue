<template>
  <gates-component />
</template>

<script>
import GatesComponent from './components/GatesComponent.vue'

export default {
  name: 'App',
  components: {
    'gates-component' : GatesComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
