import Vue from 'vue'
import App from './App.vue'
import Login from './Login.vue'
import "./assets/css/styles.css"
import "./assets/js/scripts.js"
import VueRouter from 'vue-router';
import Home from './components/HelloWorld';
import About from "./components/About";
import store from "./store";

import {getAuth, onAuthStateChanged} from "firebase/auth";
import {initializeApp} from "firebase/app";

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

});

const firebaseConfig = {
  apiKey: "AIzaSyClUtvprjgHl1xg5cx0JpN0dCRMtJKsxFY",
  authDomain: "myapplication-cc132.firebaseapp.com",
  databaseURL: "https://myapplication-cc132.firebaseio.com",
  projectId: "myapplication-cc132",
  storageBucket: "myapplication-cc132.appspot.com",
  messagingSenderId: "491160586187",
  appId: "1:491160586187:web:19e967b7efca023722d84e"
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  store.dispatch("fetchUser", user);
});


Vue.use(VueRouter)

new Vue({
  router,
  firebase,
  render: h => h(App),
}).$mount('#app')






