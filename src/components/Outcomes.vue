<template>
  <b-card align="center">
    <b-card-title class="title">Archived Discussions</b-card-title>
    <b-list-group class="list" v-on:click="selectDisc">
      <b-list-group-item
        class="listItem"
        v-for="discussion in past"
        :key="discussion.id"
      >{{discussion.id.length > 25 ? discussion.id.slice(0, 25) + '...' : discussion.id}}</b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
export default {
  name: "Outcomes",
  methods: {
    selectDisc(e) {
      this.$router.push({ path: `/archived/${e.target.textContent}` });
    }
  },
  props: {
    past: Array
  }
};
</script>

<style scoped>
.list {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 78vh;
}

.list::-webkit-scrollbar {
  width: 0 !important;
}

.title {
  text-align: center;
  font-weight: 900;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 3em;
  padding: 1%;
}

.listItem {
  text-align: center;
  margin: 1em;
  padding: 1em;
  border-radius: 25px;
  background: #df691a;
  font-weight: 900;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.226);
}

.listItem:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px;
  background: #5bc0de;
  color: #ffffff !important;
  font-weight: 700 !important;
  letter-spacing: 2px;
  -webkit-box-shadow: 0px 5px 20px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.3s ease 0s;
  transform: translateY(10px);
}
.card {
  background-color: #a1cbfc00;
  border: none;
  width: 30vw;
  background-image: transparent;
  border: none;
  border-radius: 3em;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
}
</style>

