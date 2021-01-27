import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import Header from './assets/css/Header.css'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
