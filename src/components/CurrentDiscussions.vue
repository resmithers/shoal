<template>
  <div class="CurrentDiscussions">
    <h2>Current Discussions</h2>
    <b-card align="left">
      <ol name="active" id="discussion selector" v-on:click="selectDisc">
        <b-list-group-item
          v-for="discussion in active.slice(0,3)"
          :key="discussion.id"
        >{{discussion.id.length > 25 ? discussion.id.slice(0, 25) + '...' : discussion.id}}</b-list-group-item>
      </ol>
      <b-button v-b-toggle.collapse2 class="m-1">More</b-button>
      <b-collapse id="collapse2">
        <ol name="active" id="discussion selector" v-on:click="selectDisc">
          <b-list-group-item
            v-for="discussion in active.slice(4,active.length)"
            :key="discussion.id"
          >{{discussion.id.length > 25 ? discussion.id.slice(0, 25) + '...' : discussion.id}}</b-list-group-item>
        </ol>
      </b-collapse>
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
  width: 500px;
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
