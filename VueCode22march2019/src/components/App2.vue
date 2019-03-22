<template>
    <div>        
            <p>BASIC SALARY -- {{ salary }}</p>
            <p>HRA -- {{ hra() }}</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
    </div>
</template>

<script>
export default {
    props:{
        salary:Number
    },
    methods:{
        hra(){
            return this.salary*0.30;
        }
    }
    
}
</script>
  