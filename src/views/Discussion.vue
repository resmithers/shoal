<template>
  <div id="Discussion">
    <button>
      <router-link to="/dashboard">Dashboard</router-link>
    </button>
    <Keypoint :user="user" :userDetails="userDetails" :discussion="discussion" :discID="discID"/>
    <Chart :user="user" :userDetails="userDetails" :discussion="discussion" />
    <AddComment v-if="discussion && discussion.End > Date.now()" :user="user" :userDetails="userDetails"/>
    <Comments/>
  </div>
</template>

<script>
import Comments from "../components/Comments";
import Chart from "../components/Chart";
import AddComment from "../components/AddComment";
import Keypoint from "../components/Keypoint";
import Votes from "../components/Votes";
import { addDiscInteraction } from "../utils/FirestoreReq";
import { getDisc } from "../utils/FirestoreListen.js";

export default {
  name: "Discussion",
  components: {
    Keypoint,
    Comments,
    Chart,
    AddComment
  },
  data() {
    return {
      discussion: null,
      discID: this.$route.params.id
    };
  },
  props: {
    user: String,
    userDetails: Object
  },
  mounted() {
    getDisc(this);
    addDiscInteraction(this.$route.params.id, this.user);
  }
};
</script>

<style scoped></style>
