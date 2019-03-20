<template>
  <div id="Discussions">
    <h1>Discussions</h1>
    <Comments discID="greg"/>
  </div>
</template>

<script>
import Comments from "../components/Comments";
export default {
  name: "Discussions",
  components: {
    Comments
  }
};
</script>


<style>
</style>
