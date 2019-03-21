<template>
  <div id="Discussion">
    <h1>Discussion</h1>
    <Chart discID="greg"/>
    <Comments discID="greg"/>
  </div>
</template>

<script>
import Comments from "../components/Comments";
import Chart from "../components/Chart";
export default {
  name: "Discussion",
  components: {
    Comments,
    Chart
  }
};
</script>


<style>
</style>
