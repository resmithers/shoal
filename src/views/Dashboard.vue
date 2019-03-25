<template>
  <div id="Dashboard">
    <h1 v-if="userDetails">Welcome {{this.userDetails.name}}</h1>
    <CurrentDiscussions  />
    <MyDiscussions v-if='this.userDetails.access >= 3 '/>
    <ParticipatingDiscussions/>
    <Outcomes/>
    <PostDiscussions v-if='this.userDetails.access >= 3 ' :user="this.userDetails"/>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import CurrentDiscussions from "../components/CurrentDiscussions";
import MyDiscussions from "../components/MyDiscussions";
import ParticipatingDiscussions from "../components/ParticipatingDiscussions";
import Outcomes from "../components/Outcomes";
import PostDiscussions from "../components/PostDiscussions";
import { getUser, getAvailable, getInteracted } from "../utils/FirestoreListen";
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
    getAvailable()
    getInteracted(userID)
    // availables
    // i have interacted with
    // past
  }
};
</script>

<style scoped></style>
