<template>
    <div id="practice">
        <!-- <button class="btn btn-primary" @click="increase">Increase</button>
        <button class="btn btn-danger" @click="decrease">Decrease</button> -->
        <button class="btn btn-primary" @click="counter++">Increase</button>
        <button class="btn btn-danger" @click="counter--">Decrease</button>
        <button class="btn btn-warning" @click="secondCounter++">In Second</button>
        <h4> Counter -- {{counter}} | SecondCounter -- {{secondCounter}}</h4>
        <hr>
        <h3> Result -- {{final()}}</h3>
        <!-- <h2>Computed Result -- {{output}}</h2> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            counter:0,
            secondCounter:0
        }
    },
    /* eslint-disable */
    computed:{
        output(){
            console.log('computed property get called');
            return  this.counter>5?'greater than 5':'smaller than 5';
        }
    },
    watch:{
        counter: function (value , previous){
            console.log(previous);
            console.log(value);
            console.log('watch property get called');
            var vm = this;
            setTimeout(function (){
                vm.counter = 0;
            },3000);
        }
    },
    methods:{
        final(){
            console.log('final function called');
            return this.counter>5?'greater than 5':'smaller than 5';
        }
        // increase(){
        //     this.counter++;
        //     return this.final = this.counter>5?'greater than 5':'smaller than 5';
        // },
        // decrease(){
        //     this.counter--;
        //     return this.final = this.counter>5?'greater than 5':'smaller than 5';
        // }
        
    }
}
</script>

<style>
 #practice{
     text-align: center;
 }
</style>
