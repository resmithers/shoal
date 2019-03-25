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
import { addDiscInteraction } from '../utils/FirestoreReq';

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
  },
  mounted () {
  addDiscInteraction(this.$route.params.id, this.user)
console.log(this.$route.params.id)
  }
};
</script>


<style scoped>
</style>
