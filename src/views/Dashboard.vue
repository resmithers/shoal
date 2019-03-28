<template>
  <div id="Dashboard">
    <div class="dashboardContainer">
      <div id="currentDiscussions">
        <CurrentDiscussions :active="live"/>
      </div>
      <div id="myDiscs">
        <MyDiscussions v-if="userDetails && userDetails.access >= 3" :mine="mine"/>
      </div>
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
      <b-button id="logOutButton" @click="logout">Logout</b-button>
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
  top: 3em;
  left: 0;
  position: absolute;
  padding-left: 2%;
  height: 90%;
}

#participatingDiscussions {
  height: 750px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 3em;
}

#outcomes {
  right: 0;
  position: absolute;
  padding-right: 2%;
  height: 750px;
  top: 3em;
}
#logOutButton {
  left: 2px;
  position: absolute;
  top: 1px;
  border-radius: 3em;
  background-color: #032f5cce;
  border: none;
}

#logOutButton:hover {
  background-color: red;
}

#myDiscs {
  right: 140px;
  top: 0;
  position: absolute;
}
</style>
