<template>



<div class="container">
<div class="row">
<div class="col-12">

<gates-component 
    header-text="Prop check"
    v-bind:show-header="false" />

 <!-- <div>
        <router-link to="/gates">Gates</router-link>
        <router-link to="/gateEntry">Gate entry</router-link><br>
        <router-link to="/gateExit">Gate exit</router-link><br>
      </div>
      <div>
        <router-view></router-view>
      </div>  -->

</div>
</div>
</div>
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

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 a {
    display: inline-block;
    background-color: #007bff;
    border: solid 1px #007bff;
    color: white;
    padding: 5px;
    margin: 10px;
    text-decoration: none    
  }
  a:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
  a.router-link-active {
    background-color: #0062cc;
    border-color: #005cbf;
  }
</style>
