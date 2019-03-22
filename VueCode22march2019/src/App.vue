<template>
  <div>
    <h1> {{ name}} </h1>
    <h4>{{number}}</h4>
    <button @click="name ='updated name'" class="btn btn-success">Change1</button>
    <app-child :sendName="{n:name,num:number}" :sendReset="reset" @changedName="update($event)"></app-child>
    <!-- <label for="">Enter basic Salary</label>
    <input type="text" ref="bs" placeholder="Basic Salary" class="form-control">
    <br>
    <button class="btn btn-success" @click="changeSalary">Submit</button>
    <app2 :salary="basicSalary" ></app2> -->
    <!-- <app2 :sendName="name"></app2> -->
   <!-- <custom-directive></custom-directive> -->
  </div>
</template>

<script>

// import CustomDirective from './components/CustomDirective.vue';
import AppChild from './components/AppChild.vue';

export default {
  components:{
    // 'custom-directive': CustomDirective
    // 'app2':App2
    'app-child': AppChild

  },
  data: function() {
    return{
      title:'Hello From Vue',
      name:'APP COMPONENT',
      number:45
    }
  },
  methods:{
    changeSalary: function(){
      this.basicSalary = this.$refs.bs.value;
    },
    update($event){
      this.name = $event.cn;
      this.number = $event.cnum;
    },
    reset(){
      this.name = 'APP COMPONENT';
      this.number = 45;
    }
  }
}
</script>

<style scoped>
  h1{
    color: blue;
  }
  div{
    border: 2px solid red;
  }
</style>

