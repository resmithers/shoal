<template>
  <div id="Discussion">
    <button>
      <router-link to="/dashboard">Dashboard</router-link>
    </button>
    <KeypointOld :keyPoints="filterPoints || points" :discussion="discussion"/>
    <ChartOld :discussion="discussion" :votes="votes"/>
    <Slider :points="points" @slide="onSlide"/>
    <VotesOld :votes="filterVotes || votes"/>
    <CommentsOld :comments="filterComms || comments"/>
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
      filterPoints: null,
      filterVotes: null,
      filterComms: null
    };
  },
  props: {
    user: String,
    userDetails: Object
  },
  mounted() {
    getArchiveDisc(this);
    // getSubCollections(this);
  },
  methods: {
    onSlide: function(value) {
      this.slidePoints = value;
      const [maxTime, minTime] = [
        this.points[this.slidePoints[0]].Timestamp,
        this.points[this.slidePoints[1]].Timestamp
      ];
      const fil = arr => {
        return arr.filter((x, i) => {
          return value[0] <= i && i <= value[1];
        });
      };
      this.filterPoints = fil(this.points);
      this.filterComms = this.comments.filter((c, i) => {
        return minTime <= c.Timestamp && c.Timestamp <= maxTime;
      });
      // this.filterVotes = fil(this.votes);
    }
  },
  watch: {
    discussion: function() {
      console.log("Discussion is here");
      getSubCollections(this);
    }
  }
};
</script>

<style scoped></style>