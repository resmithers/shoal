<template>
  <div id="Keypoint">
    <h1>{{this.discussion.Body}}</h1>
    <button v-if="userDetails.access >= 3 && discussion.End > Date.now()" @click="showPointForm">Add Keypoint</button>
    <form v-if="addPointForm" id="addPoint" @submit.prevent="postKeyPoint">
      <textarea required cols="40" />
      <button type="submit" form="addPoint">Submit</button>
    </form>
    <ol v-if="keyPoints.length > 0">
      <p id="updatedPoints">Updated Points:</p>
      <li v-for="keyPoint in keyPoints" :key="keyPoint.id">
        {{ keyPoint.Body }}
        <br />
        {{ moment(keyPoint.Timestamp).format("LLL") }}
      </li>
    </ol>
  </div>
</template>

<script>
import { listenDisc, getDisc } from "../utils/FirestoreListen.js";
import { addDiscPoint } from "../utils/FirestoreReq.js";

import moment from "moment";
export default {
  data() {
    return {
      keyPoints: [],
      addPointForm: false
    };
  },
  mounted() {
    listenDisc(this);
  },
  props: {
    user: String,
    userDetails: Object,
    discussion: Object
  },
  methods: {
    moment: function(param) {
      return moment(param);
    },
    showPointForm: function(e) {
      this.addPointForm = true;
    },
    postKeyPoint: function(e) {
      addDiscPoint(this.discID, e.target[0].value, this.user);
      this.addPointForm = false;
    }
  }
};
</script>

<style scoped>
ol {
  list-style-type: none;
}
li {
  text-align: center;
}
h1 {
  text-align: center;
}
#updatedPoints {
  text-align: center;
}
</style>
