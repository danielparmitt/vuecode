<template>
  <div>
    <h1> This is the App Component</h1>
    <custom-directive></custom-directive>
    <!-- <app-siblingComponent></app-siblingComponent> -->
    <!-- <h1>This is the Child Component</h1> -->
    <!-- <app-childComponent></app-childComponent> -->

     <!-- <p id="para"> {{title}} </p>
     <button class="btn btn-primary ">we have go the bootstrap</button> -->

  </div>
</template>

<script>

import CustomDirective from './components/CustomDirective.vue';

export default {
  components:{
    'custom-directive': CustomDirective
  },
  data: function() {
    return{
      title:'Hello From Vue'
    }
  }

}
</script>

<style scoped>
  h1{
    color: blue;
  }
</style>

