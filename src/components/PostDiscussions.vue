<template>
  <div class="PostDiscussionsContainer">
    <form class="addDisc" @submit.prevent="addDisc">
      <div class="PostDiscussions">
        <input v-model="title" type="text" placeholder="Title" name="Title">
        <input v-model="message" type="text" placeholder="Message" name="Message">
        <input v-model="department" type="text" placeholder="Department" name="Department">
        <label>Start Date:</label>
        <input v-model="startDate" type="datetime-local" placeholder="Start Date" name="StartDate">
        <label>End Date:</label>
        <input v-model="endDate" type="datetime-local" placeholder="End Date" name="EndDate">
        <p>{{ feedback }}</p>

        <button>Post</button>
      </div>
    </form>
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
      } else {
        this.feedback = "Required Fields missing";
      }
    }
  }
};
</script>


<style scoped>
.PostDiscussionsContainer {
  margin: 1em;
}

.PostDiscussions {
  display: flex;
  flex-direction: column;
  width: 20em;
}
.PostDiscussions input {
  margin-bottom: 1em;
}
</style>
