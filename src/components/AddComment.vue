<template>
  <div id="AddComment">
    <br>
    <br>
    <br>
    <br>
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
  methods: {
    postComment(e) {
      const body = e.target[1].value;
      let user = e.target[0].value === "yes" ? this.user : "Anon";
      addComment(this.discID, body, user);
    }
  },
  props: {
    user: String
  }
};
</script>

<style scoped>
#commentBox {
  resize: none;
  margin: auto;
}
</style>