<template>
    <div>
        <form action="">
            <label for="">Enter username</label>
            <input type="text" class="form-control" placeholder="enter username"
                v-model="textInput">
            <label for="">Textarea</label>
        
        <!-- string interpolation doesn't work with textarea. -->
            <textarea class="form-control" cols="30" rows="5"
                v-model="areaText"></textarea>
            <label for="">CheckBox</label><br>
            <input type="checkbox" value="Choice1" id="choice1" v-model="checkboxes">Choice1 
            <input type="checkbox" value="Choice2" id="choice2" v-model="checkboxes">Choice2
            <input type="checkbox" value="Choice3" id="choice3" v-model="checkboxes">Choice3  
            <br>
            <label for="">RADIO</label><br>
            <input type="radio" value="Male" id="male" v-model="gender" >Male
            <input type="radio" value="Female" id="female" v-model="gender">Female
            <br>
            <label>DROPDOWNS</label>
            <!-- :selected="number == 'three'" --> <br>
            <select id="numbers" v-model="number" >
                <option v-for="number in numbers"  :key="number">{{number}}</option>
            </select>
            <br>
            <label for="">SUBMIT</label>
            <br>
            <button class="btn btn-primary" @click.prevent="submit" >Submit</button>

        </form>
        <div v-if="display">
            <p>TEXT INPUT -- {{textInput}}</p>
            <p style="white-space: pre-line">TEXTAREA --  {{areaText}}</p>
            <p v-for="item in checkboxes" :key="item">CHECKBOX -- {{item}}:::{{gender}}</p>
            <!-- <p>{{checkboxes}}</p> -->
            <p>RADIO -- {{gender}}</p>
            <p>DROPDOWNS --  {{number}}  </p>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            textInput:'',
            areaText:'',
            checkboxes:[],
            gender:'',
            numbers:['one','two','three','four','five'],
            number:'',
            display:false
        }
    },
    methods:{
        submit(){
            this.display = true;
        }
    }
}
</script>
