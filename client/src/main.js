import Vue from 'vue'
import App from './App.vue'
 import axios from 'axios'
import store from './store'

// Vue.config.productionTip = false
 axios.defaults.baseURL = 'https://flight-tracker-m.herokuapp.com' 

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
