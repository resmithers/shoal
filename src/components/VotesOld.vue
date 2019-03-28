<template>
  <div id="Votes">
    <h1>votes</h1>
    <ul>
      <li>Meaningful votes: {{ votes && votes.length }}</li>
      <li>Upvotes: {{ upVotes }}</li>
      <li>Downvotes: {{ downVotes }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    votes: Object,
    updown: Object
  },
  data() {
    return {
      upVotes: 0,
      downVotes: 0
    };
  },
  watch: {
    votes: function() {
      this.total = this.votes.length;
    },
    updown: function() {
      this.upVotes = this.updown.up.length;
      this.downVotes = this.updown.down.length;
    }
  }
};
</script>

<style scoped></style>
