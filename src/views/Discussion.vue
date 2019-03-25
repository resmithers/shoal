<template>
  <div id="Discussion">
    <button>
      <router-link to="/dashboard">dashboard</router-link>
    </button>
    <Keypoint :user="user" userAccess="3" :userDetails="userDetails" />
    <Chart/>
    <Votes :user="user" />
    <AddComment :user="user" :userDetails="userDetails" />
    <Comments/>
  </div>
</template>

<script>
import Comments from "../components/Comments";
import Chart from "../components/Chart";
import AddComment from "../components/AddComment";
import Keypoint from "../components/Keypoint";
import Votes from "../components/Votes";

export default {
  name: "Discussion",
  components: {
    Keypoint,
    Comments,
    Chart,
    AddComment,
    Votes
  },
  props: {
    user: String,
    userDetails: Object
  }
};
</script>


<style scoped>
</style>
