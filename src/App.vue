<template>
  <div id="app">
    <router-view :logout="logout" :set-user="setUser" :user="user" :user-details="userDetails"/>
  </div>
</template>
<script>
import { getUser } from "./utils/FirestoreListen";
import firebase from "firebase";

export default {
  data() {
    return {
      user: null,
      userDetails: null
    };
  },
  mounted() {
    if (localStorage.getItem("userUID")) {
      this.user = localStorage.getItem("userUID");
      this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
    }
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
          this.user = null;
          this.userDetails = null;
          localStorage.clear();
          this.$router.push({ name: "Home" });
        });
    }
  }
};
</script>
<style >
body {
  overflow-x: hidden;
}
</style>
