<template>
  <div id="Discussion">
    <b-container class="cont">
      <b-row>
        <b-col cols="8">
          <router-link to="/dashboard">
            <b-button class='rounded'>Dashboard</b-button>
          </router-link>
          <Keypoint
            :user="user"
            :userDetails="userDetails"
            :discussion="discussion"
            :discID="discID"
          />
          <Chart :user="user" :userDetails="userDetails" :discussion="discussion"/>
        </b-col>
        <b-col cols="4">
          <Comments :inComments="comments"/>
          <AddComment
            v-if="discussion && discussion.End > Date.now()"
            :user="user"
            :userDetails="userDetails"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Comments from "../components/Comments";
import Chart from "../components/Chart";
import AddComment from "../components/AddComment";
import Keypoint from "../components/Keypoint";
import { addDiscInteraction } from "../utils/FirestoreReq";
import { getDisc } from "../utils/FirestoreListen.js";
import { db } from "../utils/config.js";

export default {
  name: "Discussion",
  components: {
    Keypoint,
    Comments,
    Chart,
    AddComment
  },
  props: {
    user: String,
    userDetails: Object
  },
  data() {
    return {
      discussion: null,
      discID: this.$route.params.id,
      points: null,
      votes: null,
      comments: null
    };
  },
  watch: {
    discussion: function() {}
  },
  mounted() {
    getDisc(this);
    addDiscInteraction(this);
  },
  beforeDestroy() {
    const unDisc = db.collection("Discussions").onSnapshot(() => {});
    const unComm = db
      .collection("Discussions")
      .doc(this.discID)
      .collection("Comments")
      .onSnapshot(() => {});
    const unVot = db
      .collection("Discussions")
      .doc(this.discID)
      .collection("Votes")
      .onSnapshot(() => {});
    const unPoint = db
      .collection("Discussions")
      .doc(this.discID)
      .collection("Points")
      .onSnapshot(() => {});
    Promise.all([unDisc, unComm, unVot, unPoint]).then(() =>
      console.log("disconnect")
    );
  }
};
</script>

<style scoped>
.cont {
  width: 100%;
  margin: 0 !important;
  margin-right: 0 !important;
  max-width: 100% !important;
}


.rounded {
      border-radius: 1em !important;
      margin-bottom: 3px;
}


#Discussion {
  width: 100%;
  background-repeat: no-repeat;
  background: radial-gradient(transparent 45%, #0c4783),
    url("../images/shore.png");
  background-position: cover;
  background-size: 100%;
  height: 100vh;
  overflow-y: hidden;
}
</style>
