<template>
    <div>
        <h1>This is the Child Component</h1>
        <h1> {{counter}} </h1>
        <button class="btn btn-success" @click="increase">IncreaseCounter</button>
        <!-- <button class="btn btn-success" v-on:click="increase">IncreaseCounter</button> -->
        <h3 v-html="link"></h3>
         <h4><a :href="newLink">Another Link</a></h4>
        <!-- <h4><a v-bind:href="newLink">Another Link</a></h4> -->

        <input type="text" class="form-control" v-model="inputText">
        <br>
        <h5> {{inputText}} </h5>
    </div>
</template>

<script>
export default {
    data: function (){
        return{
            counter:0,
            link:'<a href="https://www.google.com">Link</a>',
            newLink:'https://www.google.com',
            inputText:'Vuejsorg is the official website'
        }
    },
    methods:{
        increase: function() {
            this.counter++;
        }
    }
}
</script>

<style scoped>
    h1{
        color: darkorange;
    }
</style>
