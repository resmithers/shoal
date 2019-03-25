<template>
  <div id="app">
    <router-view :logout='this.logout' :setUser="this.setUser" :user="this.user" :userDetails="this.userDetails"/>
  </div>
</template>
<script>
import { getUser } from "./utils/FirestoreListen";
import firebase from 'firebase';

export default {
  data() {
    return {
      user: null,
      userDetails: null
    };
  },
  methods: {
    setUser: function(newUser) {
      this.user = newUser;
      getUser(this);
    },
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Home" });
          this.user = null;
          this.userDetails = null;
          localStorage.clear();
        });
    }
  },
  mounted() {
    if (localStorage.getItem("userUID")) {
      this.user = localStorage.getItem("userUID");
      this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
    }
  }
};
</script>
<style>
</style>
