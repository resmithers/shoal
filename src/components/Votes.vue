<template>
  <div id="Votes">
    <h1>votes</h1>
    <ul>
      <li @click="this.postVote" value="1">Positive: {{this.up}}</li>
      <li>Total votes: {{this.total}}</li>
      <li @click="this.postVote" value="-1">Negative: {{this.down}}</li>
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
      if (this.discussion.End > Date.now()) {
        const vote = e.target.value;
        const docUID = this.$route.params.id;
        const user = this.user;
        addVote(vote, user, docUID);
      }
    }
  }
};
</script>

<style scoped></style>
