<template>
    <div>
        <h5> Counter is --- {{getCounter}}</h5>
        <h5>{{num}}</h5>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed:  mapGetters ([
        'getCounter'
    ])
   
    
}    
    // computed:{
    //     count(){
    //         // return this.$store.state.counter *2;
    //         return this.$store.getters.getCounter;
    //     }
    // }
    // props:['sendCounter']

</script>

<style>

</style>
