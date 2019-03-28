<template>
  <div id="appcomponent">
    <h1>App Component</h1>
    <hr>
    <app-header></app-header>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components:{
    'app-header':Header
  }
}
</script>


<style scoped>
  h1{
    color: deepskyblue;
  }
  #appcomponent{
    text-align: center
  }
</style>
