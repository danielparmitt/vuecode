<template>
  <div>
    <h1>This is the App Component</h1>
    <hr>
    <!-- <app-result :sendCounter="counter"></app-result> -->
    <app-result></app-result>
    <hr>
    <app-another-result></app-another-result>
    <hr>
    <!-- <app-counter @updated="counter += $event"></app-counter> -->
    <app-counter></app-counter>
  </div>
</template>

<script>
import Counter from './components/Counter';
import Result from './components/Result';
import AnotherResult from './components/AnotherResult';

export default {
  components:{
    'app-counter':Counter,
    'app-result':Result,
    'app-another-result':AnotherResult
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
