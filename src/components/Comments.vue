<template>
  <div class="Comments">
    <h1>Comments:</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.Body }}
        <br>
        {{moment(comment.Timestamp).format('LLL')}}
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
  data() {
    return {
      comments: null
    };
  },

  props: {
    discID: String
  },

  mounted() {
    listenComments(this);
  },

  watch: {
    comments: function() {}
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
