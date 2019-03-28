<template>
    <div>
        <h2>This is the Counter Component</h2>
        <button class="btn btn-success" @click="increment">Increase</button>
        <button class="btn btn-danger" @click="decrement" >Decrease</button>
    </div>
</template>

<script>
export default {
    methods:{
        increment(){
            // this.$emit('updated',1);
            this.$store.state.counter++;
        },
        decrement(){
            // this.$emit('updated',-1);
            this.$store.state.counter--;
        }
    }
}
</script>

<style>

</style>
