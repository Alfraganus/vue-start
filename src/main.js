import Vue from 'vue'
import App from './App.vue'
import "./assets/css/styles.css"
import "./assets/js/scripts.js"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
