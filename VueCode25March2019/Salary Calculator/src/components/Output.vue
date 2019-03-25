<template>
    <div>
        <p>Basic Salary -- {{sendBS}} </p>
        <p>HRA -- {{hra()}}</p>
        <p>DA -- {{da()}}</p>
        <p>TA -- {{ta()}}</p>
        <p>PF -- {{pf()}}</p>
        <p>Gross Salary -- {{gs()}}</p>
        <p>Tax -- {{tax()}}</p>
        <p>Net Salary -- {{ns()}}</p>
    </div>
</template>

<script>
export default {
    props:['sendBS'],
    methods:{
        hra(){
            return this.sendBS*0.30;
        },
        da(){
            return this.sendBS*0.20;
        },
        ta(){
            return this.sendBS*0.10;
        },
        pf(){
            return this.sendBS*0.05;
        },
        gs(){
            return this.sendBS+this.hra()+this.da()+this.ta()-this.pf();
        },
        tax(){
            return this.sendBS*0.10;
        },
        ns(){
            return this.gs()-this.tax();
        }
    }
}
</script>


