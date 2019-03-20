<template>
  <div id="Discussions">
    <h1>Discussions</h1>
    <Chart discID="greg"/>
    <Comments discID="greg"/>
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
  }
};
</script>


<style>
</style>
