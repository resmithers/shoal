<template>
  <div id="Dashboard">
    <h1 v-if="userDetails">Welcome {{this.userDetails.name}}</h1>
    <CurrentDiscussions :active="live" />
    <MyDiscussions v-if="userDetails.access >= 3" :mine="mine" />
    <ParticipatingDiscussions :interacted="interacted" />
    <Outcomes :past="historical" />
    <PostDiscussions v-if="this.userDetails.access >= 3 " :user="this.userDetails"/>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import CurrentDiscussions from "../components/CurrentDiscussions";
import MyDiscussions from "../components/MyDiscussions";
import ParticipatingDiscussions from "../components/ParticipatingDiscussions";
import Outcomes from "../components/Outcomes";
import PostDiscussions from "../components/PostDiscussions";
import { getAvailable, getHistorical } from "../utils/FirestoreListen";

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
  data() {
    return {
      live: [],
      historical: [],
      interacted: [],
      mine: []
    };
  },
  mounted() {
    if (!this.user) this.$router.push({ name: "Home" });
    getAvailable(this);
    getHistorical(this);
    // getInteracted()
    // availables
    // i have interacted with
    // past
  }
};
</script>

<style scoped></style>
