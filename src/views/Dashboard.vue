<template>
  <div id="Dashboard">
    <h1 v-if="userDetails">Welcome {{this.userDetails.name}}</h1>
    <CurrentDiscussions/>(Manager)
    <MyDiscussions/>
    <ParticipatingDiscussions/>
    <Outcomes/>(Manager)
    <PostDiscussions :user="this.userDetails"/>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import CurrentDiscussions from "../components/CurrentDiscussions";
import MyDiscussions from "../components/MyDiscussions";
import ParticipatingDiscussions from "../components/ParticipatingDiscussions";
import Outcomes from "../components/Outcomes";
import PostDiscussions from "../components/PostDiscussions";
import { getUser } from "../utils/FirestoreListen";
import firebase from "firebase";

export default {
  name: "Dashboard",
  components: {
    CurrentDiscussions,
    MyDiscussions,
    ParticipatingDiscussions,
    Outcomes,
    PostDiscussions
  },
  data() {
    return { userDetails: null };
  },
  props: {
    user: String,
    setUser: Function
  },
  mounted() {
    if (localStorage.getItem("userUID")) {
      this.setUser(JSON.parse(localStorage.getItem("userUID")), JSON.parse(localStorage.getItem("userDetails")) );
      this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
      getUser(this);
    } else {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Home" });
          localStorage.clear();
        });
    }
  }
};
</script>


  


<style scoped>
</style>
