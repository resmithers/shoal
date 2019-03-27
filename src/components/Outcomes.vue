<template>
  <div class="outcomes">
    <h2>Outcomes</h2>

    <b-card align="left">
      <ol name="outcomes" id="discussion selector" v-on:click="selectDisc">
        <b-list-group-item
          v-for="discussion in past"
          :key="discussion.id"
        >{{discussion.id.length > 25 ? discussion.id.slice(0, 25) + '...' : discussion.id}}</b-list-group-item>
      </ol>
    </b-card>
  </div>
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
  width: 500px;
}

.card-body {
  background: #a1cbfc96;
  border: none;
  border-radius: 10%;
}

.list-group-item {
  text-align: center;
  font-size: 130%;
  padding: 1em;
  margin: 1em;
  border-radius: 25px;
  background: #032f5cce;
  font-weight: 900;
}
</style>

