<template>
  <div>
    <h1 class="alert alert-primary">This is an App Component</h1>
    <button class="btn btn-success" @click="show = !show">Start Transition</button>
    <hr>
    <transition name="fade" >
      <div v-if="show">
        <h4 class="alert alert-success" >This is some Transition show.</h4>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false
    }
  }
}
</script>

<style>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 2s;
    /* opacity: 1; */
  }
  .fade-enter-to{

  }
  .fade-leave{
    opacity: 1
  }
  .fade-leave-active{
    transition: opacity,  2s;
    opacity: 0;
  }
  .fade-leave-to{

  }
</style>
