<template>
  <div class="CurrentDiscussions">
    <b-card align="left">
      <h2>Current Discussions</h2>
      <ol name="active" id="discussion selector" v-on:click="selectDisc">
        <b-list-group-item
          v-for="discussion in active"
          :key="discussion.id"
        >{{discussion.id.length > 25 ? discussion.id.slice(0, 25) + '...' : discussion.id}}</b-list-group-item>
      </ol>
    </b-card>
  </div>
</template>


<script>
export default {
  name: "CurrentDiscussions",
  methods: {
    selectDisc(e) {
      this.$router.push({ path: `/discussion/${e.target.textContent}` });
    }
  },
  data() {
    return {
      discussions: []
    };
  },
  props: {
    active: Array
  }
};
</script>




<style scoped>
.m-1 {
  position: absolute;
  top: 320px;
}
ol {
  list-style-type: none;
  padding: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0;
  height: 760px;
}

.ol:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 110px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
}

h2 {
  text-align: center;
  font-weight: 900;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 3em;
  padding: 1%;
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
  background-image: transparent;
  border: none;
  border-radius: 3em;
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
