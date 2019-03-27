<template>
  <div class="Outcomes">
    <select name="outcomes" id="discussion selector" v-on:change="selectDisc">
      <option value>Previous discussions</option>
      <option v-for="discussion in past" :key="discussion.id">{{discussion.id}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Outcomes",
  methods: {
    selectDisc(e) {
      this.$router.push({ path: `/archived/${e.target.value}` });
    }
  },
  props: {
    past: Array
  }
};
</script>



<style scoped>
</style>
