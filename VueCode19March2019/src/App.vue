<template>
  <div>
    <h1> This is the App Component</h1>
    <!-- <h1>This is the Child Component</h1> -->
    <app-childComponent></app-childComponent>
     <!-- <p id="para"> {{title}} </p>
     <button class="btn btn-primary ">we have go the bootstrap</button> -->

  </div>
</template>

<script>
export default {

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

