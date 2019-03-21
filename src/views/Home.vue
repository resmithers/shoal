<template>
  <div class="Home">
    <h1>Home (No user ? Login : Dashboard)</h1>
    <Login user="Hugo Boss"/>
    <button @click="logout">Logout</button>
    <Dashboard/>
  </div>
</template>

<script>
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import firebase from "firebase";

export default {
  name: "Home",
  components: {
    Login,
    Dashboard
  },
  mounted() {
    console.log(firebase.auth().currentUser);
    console.log("^^^^^^^^^^  Current User LOGGED IN ");
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "signup" });
        });
    }
  }
};
</script>

<style scoped></style>
