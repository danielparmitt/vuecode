<template>
    <div>
        <h3>Query Component</h3><br><br>
        <hr>
        <router-link to="/query1"><button class="btn btn-info" >Query1</button></router-link>
        <button class="btn btn-info" @click="backToHome" >BackToHome</button>
    </div>
</template>

<script>
export default {
    methods:{
        backToHome(){
            this.$router.push({path:'/'});
        }
    }
}
</script>
