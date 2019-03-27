<template>
  <div id="Keypoint">
    <h1>{{discussion && discussion.Body}}</h1>
    <div>
      <b-button
        v-b-modal.modal1
        v-if="userDetails.access >= 3 && discussion && discussion.End > Date.now()"
      >Add key point</b-button>
      <b-modal id="modal1" title="BootstrapVue">
        <p class="my-4">Add key point</p>
        <b-form @submit.prevent="postKeyPoint">
          <b-form-textarea required rows="10"/>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        <b-modal-footer />
      </b-modal>
    </div>
    <div >
      <b-button v-b-toggle.collapse1 >Toggle</b-button>
      <b-collapse id="collapse1" >
        <b-card v-for="kp in keyPoints" :key="kp.id" class="w-50" style="height: 150px">
          <b-card-body>{{ kp.Body }}</b-card-body>
          <b-card-body>{{ moment(kp.Timestamp).format("LLL") }}</b-card-body>
        </b-card>
      </b-collapse>
    </div>
    <ol v-if="keyPoints.length > 0">
      <p id="updatedPoints">Updated Points:</p>
      <li v-for="keyPoint in keyPoints" :key="keyPoint.id">
        {{ keyPoint.Body }}
        <br>
        {{ moment(keyPoint.Timestamp).format("LLL") }}
      </li>
    </ol>
  </div>
</template>

<script>
import { listenDisc, getDisc, listenVotes } from "../utils/FirestoreListen.js";
import { addDiscPoint } from "../utils/FirestoreReq.js";

import moment from "moment";
export default {
  data() {
    return {
      keyPoints: [],
      addPointForm: false
    };
  },
  watch: {
    discussion: function() {
      listenDisc(this);
    }
  },
  props: {
    user: String,
    userDetails: Object,
    discussion: Object,
    discID: String
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
