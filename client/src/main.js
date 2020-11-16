import Vue from 'vue'
import App from './App.vue'
//  import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
//  axios.defaults.baseURL = 'http://localhost:3000' 

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
