<template>
  <div class="MyDiscussions">
    <b-button id="myDiscModal" v-b-modal.myDiscsModal>My Discussions</b-button>
    <b-modal id="myDiscsModal" align="center">
      <ol>
        <li v-for="discussion in mine" @click="selectDisc" :key="discussion.id">{{ discussion.id }}</li>
      </ol>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "MyDiscussions",
  methods: {
    selectDisc(e) {
      this.$router.push({ path: `/discussion/${e.target.textContent}` });
    }
  },
  props: {
    mine: Array
  }
};
</script>



<style scoped>
#myDiscModal {
}
</style>
