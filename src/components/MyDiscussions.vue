<template>
  <div class="MyDiscussions">
    <p id="myDiscsLink" v-b-modal.myDiscsModal>My Discussions</p>
    <b-modal id="modal" align="center">
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
  top: 1px;
  position: relative;
  border-radius: 3em;
  background-color: #032f5cce;
  border: none;
}
#myDiscModal:hover {
  background-color: rgb(223, 105, 26);
}

ol {
  list-style-type: none;
  color: white;
  font-weight: 900;
}
</style>
