<template>
  <div id="Discussion">
    <Keypoint discID="greg" user="hugo boss" userAccess="3"/>
    <Chart discID="greg"/>
    <AddComment user="hugo boss"/>
    <Comments/>
  </div>
</template>

<script>
import Comments from "../components/Comments";
import Chart from "../components/Chart";
import AddComment from "../components/AddComment";
import Keypoint from "../components/Keypoint";

export default {
  name: "Discussion",
  components: {
    Keypoint,
    Comments,
    Chart,
    AddComment
  }
};
</script>


<style scoped>
</style>
