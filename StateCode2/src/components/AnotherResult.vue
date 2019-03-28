<template>
    <div>
        <h5> Counter is --- {{count}}</h5>
    </div>
</template>

<script>
export default {
    computed:{
        count(){
            // return this.$store.state.counter;
            return this.$store.getters.getCounter;
        }
    }
    // props:['sendCounter']
}
</script>

<style>

</style>
