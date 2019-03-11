import 'balloon-css'
import 'bulma'
import 'noty/lib/noty.css'
import 'noty/lib/themes/nest.css'
import Vue from 'vue'
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
