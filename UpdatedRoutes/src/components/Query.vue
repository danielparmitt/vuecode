<template>
    <div>
        <h3>Query Component</h3><br><br>
        <hr>
        <app-nav></app-nav>
        <!-- <router-link to="/query1"><button class="btn btn-info" >Query1</button></router-link> -->
        <router-view></router-view>
        <button class="btn btn-info" @click="backToHome" >BackToHome</button>
    </div>
</template>

<script>
import QueryNav from './QueryNav';
export default {
    methods:{
        backToHome(){
            this.$router.push({path:'/'});
        }
    },
    components:{
        'app-nav':QueryNav
    }
}
</script>
