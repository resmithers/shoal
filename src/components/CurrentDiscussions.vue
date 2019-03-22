<template>
  <div class="CurrentDiscussions">
<select name="discussionOption" id="discussion selector" v-on:change="selectDisc">
  <option value=''>Current discussions</option>
  <option v-for="discussion in discussions" :key="discussion.id">{{discussion.id}}</option>
  </select>
  </div>
</template>

<script>
import { listenAllDiscussions } from '../utils/FirestoreListen.js';

export default {
  name: "CurrentDiscussions",
  methods: {
selectDisc(e) {
  this.$router.push({path:`/discussion/${e.target.value}`})
}
  },
  data(){ return {  
    discussions: []
    };
  },
  mounted() {
    listenAllDiscussions(this)
      
  }

};
</script>




<style scoped>
</style>
