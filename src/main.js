import Vue from 'vue'
import App from './App.vue'
import "./assets/css/styles.css"
import "./assets/js/scripts.js"
import VueRouter from 'vue-router';
import Home from './components/HelloWorld';
import About from "./components/About";
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: "index", component: Home },
    { path: '/about', name: "about", component: About },
  ]
});

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
