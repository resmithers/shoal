<template>
  <div id="AddComment">
    <div class="d-flex justify-content-center">
      <b-button v-b-modal.modal2 variant="primary" class="w-25 rounded">Add a Comment?</b-button>
      <b-modal id="modal2" title="BootstrapVue">
        <p class="my-4">Add your comment</p>Show Username?
        <b-form @submit.prevent="postComment">
          <select id="select">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>

          <b-form-textarea id="commentBox" required rows="10"/>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-modal>
    </div>
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


.rounded {
      border-radius: 1em !important;
}

</style>