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
import {
  getArchiveDisc,
  getSubCollections
} from "../utils/FirestoreStaticListen";
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
      comments: null
    };
  },
  watch: {
    discussion: function() {
      console.dir(this.discussion);
    }
  },
  mounted() {
    getArchiveDisc(this);
    getSubCollections(this);
  }
};
</script>

<style scoped></style>
