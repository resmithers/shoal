<template>
  <div id="Keypoint">
    <h1>{{discID}}</h1>
    <button v-if="userAccess >= 3" @click="showPointForm">Add Keypoint</button>
    <form v-if="addPointForm" id="addPoint" @submit.prevent="postKeyPoint">
      <input required>
      <button type="submit" form="addPoint">Add KeyPoint</button>
    </form>
    <ol v-if="keyPoints.length > 0">
      <p id="updatedPoints">Updated Points:</p>
      <li
        v-for="keyPoint in keyPoints"
      >{{keyPoint.Body}}&nbsp;{{moment(keyPoint.Timestamp).format('LLL')}}</li>
    </ol>
  </div>
</template>

<script>
import { listenDisc } from "../utils/FirestoreListen.js";
import { addDiscPoint } from "../utils/FirestoreReq.js";

import moment from "moment";
export default {
  data() {
    return {
      keyPoints: [],
      addPointForm: false,
      discID: this.$route.params.id
    };
  },
  mounted() {
    listenDisc(this);
    console.log(this.keyPoints);
  },
  props: {
    user: String,
    userAccess: String
  },
  watch: {},
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