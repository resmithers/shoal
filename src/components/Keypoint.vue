<template>
  <div id="Keypoint">
    <h1>{{discussion && discussion.Body}}</h1>
    <div class='d-flex justify-content-center'>
      <b-button
        v-b-modal.modal1
        variant='primary'
        v-if="userDetails.access >= 3 && discussion && discussion.End > Date.now()"
      >Add key point</b-button> 
</div>
      <div class='d-flex justify-content-center m-3'>
      <b-card class= 'w-50 text-center'>Latest Keypoint:<br/>{{keyPoints[0].Body}}<br/>{{ keyPoints[0].Timestamp }} </b-card>
        <b-modal id="modal1" title="BootstrapVue">
          <p class="my-4">Add key point</p>
          <b-form @submit.prevent="postKeyPoint">
            <b-form-textarea required rows="10"/>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
          <b-modal-footer/>
        </b-modal>
      </p>
      </div>
       <div class='d-flex justify-content-center'>
      <b-button v-b-toggle.collapse1>Show previous keypoints</b-button>
       </div>
    <div class='d-flex justify-content-center collapse'>
      <b-collapse class='w-50' id="collapse1">
        <b-card v-for="kp in keyPoints" id="kp.id" :key="kp.id" class="w-100 text-center" style="height: 100px">
          <b-card-body>
            {{ kp.Body }}
            <br>
            {{ moment(kp.Timestamp).format("LLL") }}
          </b-card-body>
        </b-card>
      </b-collapse>
    </div>
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

.collapse {
  min-height: 50px;
  max-height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.collapse::-webkit-scrollbar {
 width: 0 !important;
}

</style>
