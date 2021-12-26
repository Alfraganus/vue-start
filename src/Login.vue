
<template>
  <div>
    <div class="login-form">
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
      <button v-on:click="googleSignIn()">Google Signin</button>


      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import {initializeApp} from "firebase/app";
import notification from 'vue-notification-ui'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import Vue from "vue";
Vue.use(notification, {
  position: 'notification-top-right', // top, bottom, left, right
  duration: 5000, // default
  left: 20, // default
  bottom: 20, // default
  top: 20, // default
  right: 40 // default
})
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
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');



const auth = getAuth();
export default {
  name: 'Login',
  components : {
  },
  data() {
    return {
      form: {
        email :'',
        password :'',
      },
      error : null
    }
  },
  methods: {
    googleSignIn()
    {
      signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            // ...
          }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    },
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
            this.$notification(
                'Error occured!',
                error.message,
                'danger',
            )
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)

          });
    },
  },
  mounted() {

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
