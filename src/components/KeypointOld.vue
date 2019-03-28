<template>
  <div id="Keypoint">
    <h2 class="text-center" v-if="discussion">{{discussion && discussion.Body}}</h2>
    <div class='d-flex justify-content-center m-3'>
      <b-card v-if="keyPoints.length > 0" class= 'w-50 text-center rounded'>Latest Keypoint:<br/>{{keyPoints[0].Body}}<br/>{{ moment(keyPoints[0].Timestamp).format("LLL") }} 
      </b-card>
      </div>
      <div class='d-flex justify-content-center'>
      <b-button class='rounded' v-if="keyPoints.length > 1" v-b-toggle.collapse1>Show Previous Key Points</b-button>
       </div>
       <div class='d-flex justify-content-center collapse'>
      <b-collapse  class='w-50' id="collapse1">
        <b-card v-for="kp in keyPoints" id="kp.id" :key="kp.id" class="w-100 text-center rounded gap" style="height: 100px">
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
import moment from "moment";

export default {
 props: {
    discussion: Object,
    keyPoints: Array
  },
  methods: {
    moment: function(param) {
      return moment(param);
    }
  }
};
</script>

<style scoped>

.rounded {
  border-radius: 1em !important;
  font-weight: 900;
}

h2 {
  text-align: center;
  font-weight: 900;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 3em;
  padding: 1%;
}

.gap {
  margin: 5px;
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
