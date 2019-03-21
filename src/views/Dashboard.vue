<template>
  <div id="Dashboard">
    <h1>Dashboard</h1>
    <CurrentDiscussions/>(Manager)
    <router-link to="/discussions/1">MVP Disc</router-link>
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

export default {
  name: "Dashboard",
  components: {
    CurrentDiscussions,
    MyDiscussions,
    ParticipatingDiscussions,
    Outcomes,
    PostDiscussions
  }
};
</script>



<style scoped>
</style>
