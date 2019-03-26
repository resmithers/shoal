<template>
  <div id="Discussion">
    <button>
      <router-link to="/dashboard">Dashboard</router-link>
    </button>
    <KeypointOld :keyPoints="points" :discussion="discussion"/>
    <ChartOld :user="user" :userDetails="userDetails" :discussion="discussion"/>
    <VotesOld :votes="votes"/>
    <CommentsOld :comments="comments"/>
  </div>
</template>

<script>
import CommentsOld from "../components/CommentsOld";
import ChartOld from "../components/ChartOld";
import VotesOld from "../components/VotesOld";
import KeypointOld from "../components/KeypointOld";
import {
  getArchiveDisc,
  getSubCollections
} from "../utils/FirestoreStaticListen";

export default {
  name: "archived",
  components: {
    KeypointOld,
    CommentsOld,
    ChartOld,
    VotesOld
  },
  data() {
    return {
      discussion: null,
      discID: this.$route.params.id,
      max: Date.now(),
      votes: {},
      comments: [],
      points: []
    };
  },
  props: {
    user: String,
    userDetails: Object
  },
  mounted() {
    getArchiveDisc(this);
    getSubCollections(this);
  }
};
</script>

<style scoped></style>
