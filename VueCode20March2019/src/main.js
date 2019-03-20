import Vue from 'vue'
import Apple from './App.vue'
import Child from './components/Child.vue'


Vue.config.productionTip = false

Vue.component('app-childComponent',Child); // created Component Globally
// Vue.component('app-siblingComponent',Sibling); 


Vue.directive('colorswitch', function (el){
  el.style.backgroundColor = 'aqua';
});

new Vue({
  // el:'#app',
  render: h => h(Apple),
}).$mount('#app')



