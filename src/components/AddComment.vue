<template>
  <div id="AddComment">
    <div class="d-flex justify-content-center">
      <b-button v-b-modal.modal2 variant="primary" class="w-25 rounded">Add A Comment</b-button>
      <b-modal @ok="postComment" id="modal2" title="Add A comment">
        <h5 id="showUserName">Show Username?</h5>
        <b-form @submit.prevent="postComment">
          <select id="select">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          <b-form-textarea id="commentBox" required rows="10"/>
          <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
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
    postComment() {
      const user =
        document.getElementById("select").value === "yes"
          ? this.userDetails.name
          : "Anon";

      const body = document.getElementById("commentBox").value;

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
  font-weight: 900;
}

#showUserName {
  font-weight: 900;
}

#select {
  font-weight: 900;
  border-radius: 3em;
  background: #4e5d6c;
  color: white;
  margin-bottom: 15px;
}

#commentBox {
  resize: none;
  color: rgba(0, 0, 0, 1);

  background: RGBA(255, 255, 255, 0.7);
  width: 100%;
  box-sizing: border-box;
  border: 2px solid rgb(223, 223, 231);
  border-radius: 4px;
  display: block;
  margin: 0;
}
</style>