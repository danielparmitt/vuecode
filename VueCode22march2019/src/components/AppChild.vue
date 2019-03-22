<template>
    <div id="appchild">
        <h3>{{childName}}</h3>
        <h4>{{ childNumber }}</h4>
        <button @click="change" class="btn btn-primary">Change Props</button>
        <button @click="sendReset()" class="btn btn-warning">Reset</button>
    </div>
</template>

<script>
export default {
    props:['sendName','sendReset'],
    data: function (){
        return{
            childName:this.sendName.n,
            childNumber:this.sendName.num
        }
    },
    methods:{
        change(){
            this.childNumber = 55;
            this.childName = "App Child Component";
            this.$emit('changedName',{cn:this.childName,cnum:this.childNumber});
        }
    }
}
</script>

<style scoped>
    #appchild{
        margin:5px;
        border:2px solid green;
    }
</style>
