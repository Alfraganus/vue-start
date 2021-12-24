
<template>
  <div>
    <div class="login-form">
      <div id="notifikation"></div>
        <Toast v-if="showToToast"></Toast>
        <form action="#">
        <h2 class="text-center">Log in</h2>
        <div class="form-group">
          <input type="text" class="form-control" v-model="form.email" placeholder="Username" required="required">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" v-model="form.password"  placeholder="Password" required="required">
        </div>
        <div class="form-group">
          <button type="button" v-on:click="SignIn()" class="btn btn-primary btn-block">Log in</button>
        </div>
        <div class="clearfix">
          <label class="float-left form-check-label"><input type="checkbox"> Remember me</label>
          <a href="#" class="float-right">Forgot Password?</a>
        </div>
      </form>
      <p class="text-center"><a href="#">Create an Account</a></p>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>

import {initializeApp} from "firebase/app";
import VueNotifikation from 'vue-notifikation';

const firebaseConfig = {
  apiKey: "AIzaSyClUtvprjgHl1xg5cx0JpN0dCRMtJKsxFY",
  authDomain: "myapplication-cc132.firebaseapp.com",
  databaseURL: "https://myapplication-cc132.firebaseio.com",
  projectId: "myapplication-cc132",
  storageBucket: "myapplication-cc132.appspot.com",
  messagingSenderId: "491160586187",
  appId: "1:491160586187:web:19e967b7efca023722d84e"
};
initializeApp(firebaseConfig);

import { Toast } from 'vuex-toast'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import Vue from "vue";
Vue.use(VueNotifikation);
const auth = getAuth();
export default {
  name: 'Login',
  components : {
    Toast
  },
  data() {
    return {
      showToToast : false,
      form: {
        email :'',
        password :'',
      },
      error : null
    }
  },
  methods: {
    CreateUser() {
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            this.$router.push("/login");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode)
            console.log(errorMessage)
          });
    },
    SignIn()
    {
      console.log(this.form.email)
      signInWithEmailAndPassword(auth, this.form.email, this.form.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            this.$router.push("/");
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)

          });
    },
  },
  mounted() {
    this.$notifikation.info({
      message: `You've just von 1 000 000$!!!`,
      height:50,
      width:100,
    });
  }
}
</script>

<style>
.login-form {
  width: 340px;
  margin: 50px auto;
  font-size: 15px;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form h2 {
  margin: 0 0 15px;
}
.form-control, .btn {
  min-height: 38px;
  border-radius: 2px;
}
.btn {
  font-size: 15px;
  font-weight: bold;
}
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";


</style>
