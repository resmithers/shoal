<template>
  <div id="Dashboard">
    <h1>Dashboard</h1>
    <CurrentDiscussions/>(Manager)
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
