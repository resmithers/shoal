<template>
  <div id="Discussion">
    <button>
      <router-link to="/dashboard">Dashboard</router-link>
    </button>
    <KeypointOld :keyPoints="filterPoints || points" :discussion="discussion"/>
    <ChartOld :discussion="discussion" :votes="filterVotes || votes"/>
    <Slider :points="pointplus" @slide="onSlide" :maxMax="maxMax"/>
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
  props: {
    user: String,
    userDetails: Object
  },
  data() {
    return {
      discussion: null,
      discID: this.$route.params.id,
      votes: {},
      comments: [],
      points: [],
      slidePoints: [],
      pointplus: null,
      filterVotes: null,
      filterPoints: null,
      filterComms: null,
      min: null,
      max: null,
      maxMax: null
    };
  },
  watch: {
    discussion: function() {
      getSubCollections(this);
    },
    points: function() {
      this.pointplus = [-1, ...this.points, -1];
    }
  },
  mounted() {
    getArchiveDisc(this);
  },
  methods: {
    onSlide: function(value, max) {
      this.min =
        value[0] === 0
          ? this.discussion.Start
          : this.points[this.points.length - value[0]].Timestamp;

      this.max =
        value[1] === max
          ? this.discussion.End
          : this.points[this.points.length - value[1]].Timestamp;

      const timeFilter = arr => {
        return arr.filter(
          ({ Timestamp }) => this.min <= Timestamp && Timestamp <= this.max
        );
      };

      this.filterPoints = timeFilter(this.points);
      this.filterComms = timeFilter(this.comments);
      this.filterVotes = timeFilter(this.votes);
    }
  }
};
</script>

<style scoped></style>
