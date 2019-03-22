<template>
  <div id="Dashboard">
    <h1 v-if='userDetails' >Welcome {{this.userDetails.name}}</h1> 
    <CurrentDiscussions/>(Manager)
    <router-link to="/discussions/greg">MVP Disc</router-link>
    <MyDiscussions/>
    <ParticipatingDiscussions/>
    <Outcomes/>(Manager)
    <PostDiscussions/>
  </div>
</template>

<script>
import CurrentDiscussions from "../components/CurrentDiscussions";
import MyDiscussions from "../components/MyDiscussions";
import ParticipatingDiscussions from "../components/ParticipatingDiscussions";
import Outcomes from "../components/Outcomes";
import PostDiscussions from "../components/PostDiscussions";
import {getUser} from '../utils/FirestoreListen';

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
    return {userDetails: null }
  },
  props: {
    user: String,
    setUser: Function
  },
  mounted() {
    getUser(this)
  }
};
</script>



<style scoped>
</style>
