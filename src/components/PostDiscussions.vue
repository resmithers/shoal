<template>
  <div id="postDiscussion" class="PostDiscussionsContainer">
    <span id="postDiscLink" v-b-modal.modal>Post Discussion</span>
    <b-modal @ok="addDisc" id="modal" title="Post Discussion" align="center">
      <form class="addDisc" @submit.prevent="addDisc">
        <input v-model="title" type="text" placeholder="Title" name="Title">
        <textarea rows="4" v-model="message" type="text" placeholder="Message" name="Message"/>
        <input v-model="department" type="text" placeholder="Department" name="Department">
        <label>Start Date:</label>
        <input v-model="startDate" type="datetime-local" placeholder="Start Date" name="StartDate">
        <label>End Date:</label>
        <input v-model="endDate" type="datetime-local" placeholder="End Date" name="EndDate">
        <p>{{ feedback }}</p>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { addNewDisc } from "../utils/FirestoreReq";
import moment from "moment";

export default {
  name: "PostDiscussions",
  data() {
    return {
      title: null,
      department: null,
      message: null,
      startDate: null,
      endDate: null,
      feedback: null
    };
  },
  props: { user: Object },
  methods: {
    addDisc(e) {
      if (
        this.title &&
        this.department &&
        this.message &&
        this.startDate &&
        this.endDate
      ) {
        addNewDisc(this.title, e, {
          body: this.message,
          author: this.user.name,
          authorID: this.user.user_id,
          dept: this.department,
          start: +moment(this.startDate).format("x"),
          end: +moment(this.endDate).format("x")
        });
        this.$router.push({ path: `/discussion/${this.title}` });
      } else {
        this.feedback = "Required Fields missing";
      }
    }
  }
};
</script>


<style scoped>
.PostDiscussionsContainer {
  /* margin: 1em; */
}

.PostDiscussions {
  display: flex;
  flex-direction: column;
  width: 20em;
  justify-items: center;
}
.PostDiscussions input {
  position: relative;

  margin-bottom: 1em;
}
.addDisc {
  display: flex;
  flex-direction: column;
}
.addDisc textarea {
  margin: 1em 0;
}

.addDisc label {
  font-weight: 900;
  font-size: 1em;
  margin-top: 0.3em;
}
.addDisc input,
textarea {
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

#postDiscLink {
  margin: 0;
}

.modal-title {
  font-weight: 900;
}
</style>
