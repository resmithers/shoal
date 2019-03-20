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
import CurrentDiscussions from "./CurrentDiscussions";
import MyDiscussions from "./MyDiscussions";
import ParticipatingDiscussions from "./ParticipatingDiscussions";
import Outcomes from "./Outcomes";
import PostDiscussions from "./PostDiscussions";

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
