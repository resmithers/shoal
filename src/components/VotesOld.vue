<template>
  <div id="Votes">
    <div class="d-flex justify-content-center">
      <b-button-group class="mt-4">
        <b-button class="left" variant="success">Positive: {{ upVotes }}</b-button>
        <b-button>Total Votes: {{ votes && votes.length }}</b-button>
        <b-button class="right" variant="danger">Negative: {{ downVotes }}</b-button>
      </b-button-group>
    </div>
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

<style scoped>
.left {
  border-radius: 1em;
}

.right {
  border-radius: 1em;
}
</style>
