<template>
  <div class="ParticipatingDiscussions">
    <h2>Participating Discussions</h2>
    <b-card align="center">
      <ol name="interacted" id="discussion selector" v-on:click="selectDisc">
        <b-list-group-item v-for="discussion in interacted" :key="discussion.id">{{discussion.id}}</b-list-group-item>
      </ol>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ParticipatingDiscussions",
  methods: {
    selectDisc(e) {
      this.$router.push({ path: `/discussion/${e.target.textContent}` });
    }
  },
  props: {
    interacted: Array
  }
};
</script>



<style scoped>
ol {
  list-style-type: none;
  padding: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 750px;
  margin: 0;
}

ol::-webkit-scrollbar {
  width: 0 !important;
}

.card {
  background-color: #a1cbfc00;
  border: none;
  width: 100%;
}

.card-body {
  background: #a1cbfc96;
  border: none;
  border-radius: 10%;
}

.list-group-item {
  text-align: center;
  font-size: 130%;
  padding: 3%;
  margin: 2%;
  border-radius: 25px;
  background: #032f5cce;
  font-weight: 900;
}
</style>
