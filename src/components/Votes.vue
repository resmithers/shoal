<template>
  <div id="Votes">
    <h1>votes</h1>
    <ul v-if="discussion.End > Date.now()" >
      <li>Total votes: {{this.total}}</li>
      <li @click="this.postVote" value="1">Positive: {{this.up}}</li>
      <li @click="this.postVote" value="-1">Negative: {{this.down}}</li>
    </ul>
    <ul v-if="discussion.End < Date.now()" >
      <li>Total votes: {{this.total}}</li>
      <li >Positive: {{this.up}}</li>
      <li >Negative: {{this.down}}</li>
    </ul>
  </div>
</template>

<script>
import { addVote } from "../utils/FirestoreReq.js";
export default {
  data() {
    return {};
  },
  props: {
    user: String,
    total: Number,
    up: Number,
    down: Number,
    userDetails: Object,
    discussion: Object
  },
  mounted() {},
  methods: {
    postVote: function(e) {
      const vote = e.target.value;
      const docUID = this.$route.params.id;
      const user = this.user;
      addVote(vote, user, docUID);
    }
  }
};
</script>

<style scoped>
</style>
