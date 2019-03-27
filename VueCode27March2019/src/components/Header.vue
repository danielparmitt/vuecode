<template>
    <div>
        <h2>Header Component</h2>
        <input type="text" ref="param" class="form-control" placeholder="enter a value">
        <button @click="takeInput" class="btn btn-danger">submit</button>
        <br>
        <p>{{inputValue}}</p>
        <hr>
        <router-link to="/" ><button  class="btn btn-primary" >Home</button></router-link>
        <router-link v-bind:to="send" ><button class="btn btn-success" >Feature</button></router-link>
        <router-link to="/query" ><button class="btn btn-warning" >Query</button></router-link>
    </div>
</template>

<script>
export default {
        data(){
            return{
                send:''
            }
        },
        methods:{
            takeInput(){
                this.send = "/feature/"+ this.$refs.param.value;
            }
        }
}
</script>

<style scoped>
    h2{
        color: coral;
    }
</style>

