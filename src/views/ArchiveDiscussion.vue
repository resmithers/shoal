<template>
  <div id="Discussion">
    <button>
      <router-link to="/dashboard">Dashboard</router-link>
    </button>
    <KeypointOld :keyPoints="points" :discussion="discussion"/>
    <ChartOld :discussion="discussion" :votes="votes"/>
    <Slider :points="points" @slide="onSlide"/>
    <VotesOld :votes="votes"/>
    <CommentsOld :comments="comments"/>
  </div>
</template>

<script>
import CommentsOld from "../components/CommentsOld";
import ChartOld from "../components/ChartOld";
import VotesOld from "../components/VotesOld";
import KeypointOld from "../components/KeypointOld";
import Slider from "../components/Slider";
import {
  getArchiveDisc,
  getSubCollections
} from "../utils/FirestoreStaticListen";

export default {
  name: "archived",
  components: {
    KeypointOld,
    CommentsOld,
    ChartOld,
    VotesOld,
    Slider
  },
  data() {
    return {
      discussion: null,
      discID: this.$route.params.id,
      max: Date.now(),
      votes: {},
      comments: [],
      points: [],
      slidePoints: [],
      filterPoints: []
    };
  },
  props: {
    user: String,
    userDetails: Object
  },
  mounted() {
    getArchiveDisc(this);
    getSubCollections(this);
  },
  methods: {
    onSlide: function(value) {
      console.log(value);
      this.slidePoints = value;
      this.filterPoints = this.points.filter((x, i) => value[0] < i < value[1]);
    }
  }
};
</script>

<style scoped></style>