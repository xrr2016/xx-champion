import 'balloon-css'
import 'bulma'
import Vue from 'vue'
import 'whatwg-fetch'
import App from './App.vue'
import './main.scss'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
