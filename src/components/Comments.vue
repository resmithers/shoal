<template>
  <div class="Comments">
    <h1>Comments:</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.Body }}
        <br>
        {{ moment(comment.Timestamp).format("LLL") }}
        <br>
        {{ comment.Author }}
      </li>
    </ul>
  </div>
</template>

<script>
import { listenComments } from "../utils/FirestoreListen";
import moment from "moment";

export default {
  props: {
    inComments: Array
  },
  data() {
    return {
      comments: null,
      discID: this.$route.params.id
    };
  },
  mounted() {
    if (!this.inComments) {
      listenComments(this);
    } else {
      this.comments = this.inComments;
    }
  },
  watch: {
    comments: function() {},
    inComments: function() {
      this.comments = this.inComments;
    }
  },
  methods: {
    moment: function(param) {
      return moment(param);
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  margin: 10px;
  border: 1px solid black;
  width: 30%;
  padding: 5px;
}
</style>
