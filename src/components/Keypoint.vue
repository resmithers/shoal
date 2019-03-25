<template>
  <div id="Keypoint">
    <h1>{{this.mainPoint}}</h1>
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
import { listenDisc, getMainPoint } from "../utils/FirestoreListen.js";
import { addDiscPoint } from "../utils/FirestoreReq.js";

import moment from "moment";
export default {
  data() {
    return {
      keyPoints: [],
      addPointForm: false,
      discID: this.$route.params.id,
      mainPoint: null
    };
  },
  mounted() {
    listenDisc(this);
    getMainPoint(this);
  },
  props: {
    user: String,
    userAccess: String,
    userDetails: Object
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