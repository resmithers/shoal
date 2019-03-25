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
  props: {
    user: String,
    setUser: Function,
    userDetails: Object,
    logout: Function
  },
  mounted() {
    if (!this.user) this.$router.push({ name: "Home" });
  }
};
</script>

<style scoped></style>
