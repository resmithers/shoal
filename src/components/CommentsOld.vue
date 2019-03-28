<template>
  <div class="d-flex justify-content-center">
  <div class="d-flex-column Comments w-100">
    <h1 class="text-center mt-5">Comments:</h1>
    <div class="coms">
    <b-card v-for="comment in comments" :key="comment.id" class="w-100 text-center" style="min-height: 110px; ">
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
import moment from "moment";

export default {
  props: {
    comments: Array
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
  color: rgb(6, 6, 112);
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
