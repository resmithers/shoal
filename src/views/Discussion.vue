<template>
  <div id="Discussion">
    <h1>Discussion</h1>
    <Chart discID="greg"/>
    <AddComment discID="greg" user="hugo boss"/>
    <Comments discID="greg"/>
  </div>
</template>

<script>
import Comments from "../components/Comments";
import Chart from "../components/Chart";
import AddComment from "../components/AddComment";
export default {
  name: "Discussion",
  components: {
    Comments,
    Chart,
    AddComment
  }
};
</script>


<style scoped>
</style>
