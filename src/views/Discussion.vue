<template>
  <div id="Discussion">
    <button>
      <router-link to="/dashboard">Dashboard</router-link>
    </button>
    <Keypoint :user="user" :userDetails="userDetails" :discussion="discussion" :discID="discID"/>
    <Chart :user="user" :userDetails="userDetails" :discussion="discussion"/>
    <AddComment
      v-if="discussion && discussion.End > Date.now()"
      :user="user"
      :userDetails="userDetails"
    />
    <Comments :inComments="comments"/>
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
      max: Date.now(),
      points: null,
      votes: null,
      comments: null,
      listening: null
    };
  },
  watch: {
    discussion: function() {
      // console.dir(this.discussion);
    }
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
#Discussion {
  background-repeat: no-repeat;
  background: radial-gradient(transparent 45%, #0c4783), url("../images/shore.png");
  background-position: cover; 

  display:block;
  
}</style>
