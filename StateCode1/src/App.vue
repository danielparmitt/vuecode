<template>
  <div>
    <h1>This is the App Component</h1>
    <hr>
    <!-- <app-result :sendCounter="counter"></app-result> -->
    <app-result></app-result>
    <hr>
    <!-- <app-counter @updated="counter += $event"></app-counter> -->
    <app-counter></app-counter>
  </div>
</template>

<script>
import Counter from './components/Counter';
import Result from './components/Result';

export default {
  components:{
    'app-counter':Counter,
    'app-result':Result
  },
  // data(){
  //   return {
  //      counter:0
  //   }
  // }
}
</script>

<style>

</style>
