<template>
  <div id="Keypoint">
    <h1>{{discussion && discussion.Body}}</h1>
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
