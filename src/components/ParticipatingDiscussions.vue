<template>
  <div class="ParticipatingDiscussions">
    <select name="interacted" id="discussion selector" v-on:change="selectDisc">
      <option value>Participating discussions</option>
      <option v-for="discussion in interacted" :key="discussion.id">{{discussion.id}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ParticipatingDiscussions",
  methods: {
    selectDisc(e) {
      this.$router.push({ path: `/discussion/${e.target.value}` });
    }
  },
  props: {
    interacted: Array
  }
};
</script>



<style scoped>
</style>
