<template>
  <div id="Votes">
    <div class="d-flex justify-content-center"></div>
    <div class="d-flex justify-content-center">
      <b-button-group class="mb-5 gap">
        <b-button class="left" variant="success" @click="this.postVote" value="1">Positive</b-button>
        <!-- >Positive: {{this.up}}</b-button> -->
        <b-button>Total Votes: {{this.total}}</b-button>
        <b-button class="right" variant="danger" @click="this.postVote" value="-1">Negative</b-button>
        <!-- >Negative: {{this.down}}</b-button> -->
      </b-button-group>
    </div>
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
        const vote = +e.target.value;
        const docUID = this.$route.params.id;
        const user = this.user;
        addVote(vote, user, docUID);
      }
    }
  }
};
</script>

<style scoped>
.left {
  border-radius: 1em;
}

.right {
  border-radius: 1em;
}

.gap {
  margin-top: 5px;
}

.rounded {
  border-radius: 1em !important;
}
</style>
