<template>
  <div id="app">
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

    }
  },
  mounted() {
    this.checkAuth()
  }
}
</script>
