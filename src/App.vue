<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'App',
  components: {Navigation},
  methods: {
    checkAuth() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log('user state '+uid);
        } else {
          console.log('user is not logged in');
        }
      });
    }
  },
  mounted() {
    this.checkAuth()
  }
}
</script>
