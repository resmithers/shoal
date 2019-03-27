<template>
  <div id="Dashboard">
    <div class="dashboardContainer">
      <h1 v-if="userDetails">Welcome {{ userDetails.name }}</h1>
      <div id="currentDiscussions">
        <CurrentDiscussions :active="live"/>
      </div>
      <MyDiscussions v-if="userDetails && userDetails.access >= 3" :mine="mine"/>
      <div id="participatingDiscussions">
        <ParticipatingDiscussions :interacted="interacted"/>
      </div>
      <div id="outcomes">
        <Outcomes :past="historical"/>
      </div>
      <PostDiscussions
        id="postDiscussions"
        v-if="userDetails && userDetails.access >= 3"
        :user="userDetails"
      />
      <button @click="logout">Logout</button>
    </div>
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
#Dashboard {
  background-repeat: no-repeat;
  background: radial-gradient(transparent 45%, #0c4783),
    url("../images/shore.png");
  background-size: 100%;
  background-position: cover;
  height: 100vh;
  /* display: block; */
}
#postDiscussions {
  right: 0%;
  top: 0;
  position: absolute;
}
.dashboardContainer {
  position: relative;
  text-align: center;
}

#currentDiscussions {
  left: 0;
  position: absolute;
  padding-left: 2%;
  height: 90%;
}

/* #participatingDiscussions {
  margin: auto;
  position: absolute;
  padding-left: 2%;
  height: 90%;
} */
.ParticipatingDiscussions {
  margin: auto;
  position: absolute;
  padding-left: 2%;
  height: 90%;
  margin-left: 40%;
}
#outcomes {
  right: 0;
  position: absolute;
  padding-right: 2%;
  height: 90%;
}
</style>
