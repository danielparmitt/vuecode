import Vue from 'vue'
import Apple from './App.vue'

Vue.config.productionTip = false


new Vue({
  //el:'#app',
  render: h => h(Apple),
}).$mount('#app')



