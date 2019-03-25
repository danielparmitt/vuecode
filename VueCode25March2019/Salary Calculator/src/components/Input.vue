<template>
    <div>
        <label for="">Enter Basic Salary</label>
        <input ref="bsinput"  type="text" placeholder="enter basic salary" class="form-control">
        <br>
        <button class="btn btn-success" @click="submit">Submit</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            localinput:0
        }
    },
    methods:{
        submit(){
            this.localinput = parseInt(this.$refs.bsinput.value);
            this.$emit('sendSalary',this.localinput);
        }
    }
}
</script>


