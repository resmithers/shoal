<template>
  <div id="Votes">
    <h1>votes</h1>
    <ul>
      <li>Total votes: {{votes.total[votes.total.length -1]}}</li>
      <li>Positive: {{votes.up.length}}</li>
      <li>Negative: {{-votes.down.length}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    votes: Object
  }
};
</script>

<style scoped></style>
