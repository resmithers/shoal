<template>
<div class="d-flex justify-content-center">
  <div class="d-flex-column Comments w-100">
    <h2 class="text-center mt-5">Comments</h2>
    <div class="coms">
    <b-card v-for="comment in comments" :key="comment.id" class="w-100 text-center rounded" style="min-height: 110px; ">
          <b-card-body>
           <span> {{ comment.Author }} : </span><span class="body"> {{ comment.Body }} </span>
            <br>
           <span class="timestamp"> {{ moment(comment.Timestamp).format("LLL") }} </span>
             
          </b-card-body>
        </b-card>  
        </div>
</div>
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
span {
  font-weight: bold;
  color: rgb(255, 136, 0);
}

.rounded {
      border-radius: 1em !important;
      margin-bottom: 10px;
}


.body {
  color: white;
  font-weight: 200;
  font-size: 26px;

}

.timestamp {
  font-size: 12px;
  color: white;
  font-weight: 200;
}

.coms {
  min-height: 110px;
  max-height:80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 20px;
  margin-right: 10px;
}

.coms::-webkit-scrollbar {
 width: 0 !important;
}
</style>
