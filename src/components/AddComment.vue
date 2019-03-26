<template>
  <div id="AddComment">
    <h1>Add A Comment</h1>
    <form id="addCommentForm" @submit.prevent="postComment">
      Show Username?
      <select>
        <br>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
      <br>
      <textarea id="commentBox" cols="100" rows="10" required></textarea>
      <br>
      <button form="addCommentForm" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { addComment } from "../utils/FirestoreReq.js";
export default {
  data() {
    return {
      discID: this.$route.params.id
    };
  },
  mounted() {},
  methods: {
    postComment({ target }) {
      const user = target[0].value === "yes" ? this.userDetails.name : "Anon";
      const body = target[1].value;
      addComment(this.discID, body, user);
    }
  },
  props: {
    user: String,
    userDetails: Object
  }
};
</script>

<style scoped>
#commentBox {
  resize: none;
  margin: auto;
}
</style>