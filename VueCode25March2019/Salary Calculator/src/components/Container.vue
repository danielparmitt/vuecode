<template>
    <div class="jumbotron">
        <h1>Salary Calculator</h1>
        <app-input @sendSalary="basicSalary = $event"></app-input>
        <!-- <p>{{basicSalary}}</p> -->
        <app-output :sendBS="basicSalary"></app-output>
    </div>
</template>

<script>
import Input from './Input';
import Output from './Output';

export default {
    components:{
        'app-input': Input,
        'app-output':Output
    },
    data(){
        return{
            basicSalary:0
        }
    }
}
</script>

<style scoped>
    h1{
        text-align: center;
        color: darkorange;
    }
</style>
