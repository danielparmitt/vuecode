<template>
    <div>
        <h3 v-color>{{text}}</h3>
        <button @click="text = 'THis is Custom Directive'">Change</button>
        <button @click="destruct">Destroy</button>
    </div>
</template>

<script>
export default {
    directives:{
        'color':{
            bind(el){
                el.style.color = 'green';
            }
        }
           
    },
    data: function (){
        return{
            text:'Inside the Custom Directive Component'
        }
    },
    methods:{
        destruct: function (){
            this.$destroy();
        }
    },
    /* eslint-disable */
    beforeCreate: function(){
        console.log('Before Create has been called.');
    },
    created: function(){
        console.log('Created has been called.');
    },
    beforeMount: function(){
        console.log('Before Mount has been called.');
    },
    mounted: function(){
        console.log('Mounted has been called.');
    },
    beforeUpdate: function(){
        console.log('Before Update has been called.');
    },
    updated: function(){
        console.log('updated has been called');
    },
    beforeDestroy: function(){
        console.log('Before destroy has been called.');
    },
    destroyed: function(){
        console.log('destroyed method has been called.');
    }
    
}
</script>
