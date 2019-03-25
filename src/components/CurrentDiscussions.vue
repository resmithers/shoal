<template>
  <div class="CurrentDiscussions">
    <select name="active" id="discussion selector" v-on:change="selectDisc">
      <option value>Current discussions</option>
      <option v-for="discussion in active" :key="discussion.id">{{discussion.id}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CurrentDiscussions",
  methods: {
    selectDisc(e) {
      this.$router.push({ path: `/discussion/${e.target.value}` });
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
</style>
