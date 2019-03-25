<template>
  <div class="MyDiscussions">
    <select name="mine" id="discussion selector" v-on:change="selectDisc">
      <option value>My discussions</option>
      <option v-for="discussion in mine" :key="discussion.id">{{ discussion.id }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "MyDiscussions",
  methods: {
    selectDisc(e) {
      this.$router.push({ path: `/discussion/${e.target.value}` });
    }
  },
  props: {
    mine: Array
  }
};
</script>



<style scoped>
</style>
