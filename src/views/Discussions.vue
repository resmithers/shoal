<template>
  <div id="Discussions">
    <h1>Discussions</h1>
    <Chart />
    <Comments />
  </div>
</template>

<script>
import Comments from "../components/Comments";
import Chart from "../components/Chart";


export default {
  name: "Discussions",
  components: {
    Comments,
    Chart
  },
   mounted() {
    listenAllDiscussions(this)
     
  },
};
</script>


<style>
</style>
