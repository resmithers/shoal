<template>
  <div id="Votes"><div class="d-flex justify-content-center">
    <b-button-group class="mt-4">
      <b-button class="left" variant="success" >Total Votes: {{votes.total && votes.total[votes.total.length -1]}}</b-button>
      <b-button>Positive: {{votes.total && votes.up.length}}</b-button>
      <b-button class="right" variant="danger" >Negative: {{votes.total && -votes.down.length}}</b-button>
     </b-button-group>
     </div>
  </div>
</template>

<script>
export default {
  props: {
    votes: Object
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
