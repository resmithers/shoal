<template>
  <div id="Dashboard">
    <Navbar :logout="logout" :user="user" :userDetails="userDetails"/>
    <!-- <div class="dashboardContainer">
      <div id="currentDiscussions">
        <CurrentDiscussions :active="live"/>
      </div>
      <div id="participatingDiscussions">
        <ParticipatingDiscussions :interacted="interacted"/>
      </div>
      <div id="outcomes">
        <Outcomes :past="historical"/>
      </div>
    </div>-->
    <b-container class="mainChild" align="center">
      <b-row row="1">
        <b-col cols="4">
          <CurrentDiscussions :active="live"/>
        </b-col>
        <b-col cols="4">
          <ParticipatingDiscussions :interacted="interacted"/>
        </b-col>
        <b-col cols="4">
          <Outcomes :past="historical"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CurrentDiscussions from "../components/CurrentDiscussions";
import ParticipatingDiscussions from "../components/ParticipatingDiscussions";
import Outcomes from "../components/Outcomes";
import { getAvailable, getHistorical } from "../utils/FirestoreListen";
import Navbar from "../components/Navbar";

export default {
  name: "Dashboard",
  components: {
    Navbar,
    CurrentDiscussions,
    ParticipatingDiscussions,
    Outcomes
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
    if (!this.user) {
      this.$router.push({ name: "Home" });
    } else {
      getAvailable(this);
      getHistorical(this);
    }
  }
};
</script>

<style scoped>

.row {
  width: 100vw;
}

.mainChild {
  margin: 0;
  margin-top: 3%;
  border: 0;
  text-align: center;
  width: 100vw;
}

#Dashboard {
  background-repeat: no-repeat;
  background: radial-gradient(transparent 45%, #0c4783),
    url("../images/shore.png");
  background-size: 100%;
  background-position: cover;
  height: 100vh;
  width: 100vw;
  margin: 0;
  border: 0;
}
</style>
