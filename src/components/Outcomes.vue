<template>
  <div class="outcomes">
    <b-card align="left">
      <h2>Outcomes</h2>
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
  height: 760px;
  margin: 0;
}

ol::-webkit-scrollbar {
  width: 0 !important;
}

h2 {
  text-align: center;
}

.card {
  background-color: #a1cbfc00;
  border: none;
  width: 500px;
}

.card-body {
  background: #4e5d6ce1;
  border: none;
  border-radius: 10%;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
}

.list-group-item {
  text-align: center;
  font-size: 130%;
  padding: 1em;
  margin: 1em;
  border-radius: 25px;
  background: #df691a;
  font-weight: 900;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.226);
}

.list-group-item:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px;
  background: #5bc0de;
  color: #ffffff !important;
  font-weight: 700 !important;
  letter-spacing: 2px;
  -webkit-box-shadow: 0px 5px 20px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.3s ease 0s;
}

.list-group-item:active {
  transform: translateY(10px);
}
</style>

