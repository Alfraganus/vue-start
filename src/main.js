import Vue from 'vue'
import App from './App.vue'
import Login from './Login.vue'
import "./assets/css/styles.css"
import "./assets/js/scripts.js"
import VueRouter from 'vue-router';
import Home from './components/HelloWorld';
import About from "./components/About";
import {getAuth, onAuthStateChanged} from "firebase/auth";
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/',
          component: Home,
        },
      ],
    },
    {
      path: '/login',
      component: Login,

    },
  ],

/*  routes: [
    { path: '/', name: "index", component: Home },
    { path: '/about', name: "about", component: About },
    { path: '/login', name: "login", component: Login },
  ]*/
});
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // const uid = user.uid;

  } else {

  }
});




