<template>
    <div>
        <h3>Feature Component</h3>
        <br><br>
        <hr>
        <h5> Route Parameter -- {{num}}</h5>
        <button class="btn btn-dark" @click="backToHome" >BackToHome</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num: this.$route.params.id
        }
    },
    methods:{
        backToHome(){
            this.$router.push({path:'/'});
        }
    }
}
</script>
