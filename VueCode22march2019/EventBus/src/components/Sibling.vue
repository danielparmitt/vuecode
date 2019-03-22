<template>
    <div>
        <p v-if="display"> {{title}} </p>
        <p v-else>This is the Else Tag</p>
        <button class="btn btn-success" @click="display = !display">CHANGE</button>
        <p v-show="display2">This is the SHow Element</p>
        <button class="btn btn-warning" @click="display2 = !display2">CHANGE</button>

        <ul>
            <li v-for="item in list2" :key="item">
                <p v-for="(value,key) in item" :key="value">{{key}}::  {{value}}</p>    
             </li>
        </ul>
        <!-- <ul>
            <li v-for="item in list" :key="item"> {{item}} </li>
        </ul> -->
        <!-- <ul>
            <li v-for="n in 10" :key="n"> {{n}} </li>
        </ul> -->
        <!-- <p v-if="type === 1">One</p>
        <p v-else-if="type === 2">Two</p>
        <p v-else-if="type === 3">Three</p>
        <p v-else-if="type === 4">Four</p>
        <p v-else>Zero</p>
        <button class="btn btn-primary" @click="type = 1">One</button>
        <button class="btn btn-dark" @click="type = 2">Two</button>
        <button class="btn btn-primary" @click="type = 3">Three</button>
        <button class="btn btn-dark" @click="type = 4">Four</button>
        <button class="btn btn-primary" @click="type = 0">Zero</button> -->
    </div>
</template>

<script>
export default {
    data: function() {
        return{
            list2:[{name:'mike',age:20},{name:'michael',age:23},{name:'maria',age:26},{
                name:'leo',age:45
            }],
            list:['india','usa','england','australia','greece','italy'],
            type:0,
            display:true,
            display2:true,
            title:'This is the Sibling Component'
        }
    }
}
</script>

<style>
    p{
        font-size: 30px;
        color: green
    }
</style>
