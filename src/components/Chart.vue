<template>
  <div>
    <div id="Chart">
      <chartjs-line
        :datalabel="'Votes'"
        :labels="labels"
        :data="datasets"
        :option="option"
        :key="chartKey"
        :fill="true"
        :linetension="0.2"
        :backgroundcolor="'rgba(75,192,192,0.2)'"
        :bordercolor="'rgba(255, 145, 0)'"
        :pointborderwidth="2"
        :pointbordercolor="'blue'"
        :pointhoverborderwidth="3"
        :pointhoverbackgroundcolor="'#636b6f'"
        :pointhoverbordercolor="'#ffd663'"
        :responsive="true"
        id="chart"
      ></chartjs-line>
    </div>
    <Votes
      :user="user"
      :userDetails="userDetails"
      :discussion="discussion"
      :total="datasets.length"
      :up="upVotes"
      :down="downVotes"
    />
  </div>
</template>

<script>
import { listenVotes } from "../utils/FirestoreListen.js";
import Votes from "./Votes";

export default {
  components: {
    Votes
  },
  props: {
    user: String,
    userDetails: Object,
    discussion: Object
  },
  data() {
    return {
      chartKey: 0,
      labels: [],
      datasets: [],
      discID: this.$route.params.id,
      upVotes: 0,
      downVotes: 0,
      option: {
        animation: {
          duration: 300
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontSize: 20,
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                display: false
              }
            }
          ]
        }
      }
    };
  },
  watch: {
    datasets: function() {
      this.chartKey++;
      this.countVotes();
    }
  },
  mounted() {
    listenVotes(this);
  },
  methods: {
    countVotes: function() {
      this.upVotes = 0;
      this.downVotes = 0;

      this.datasets.forEach(d => {
        d ? this.upVotes++ : this.downVotes++;
      });
    }
  }
};
</script>

<style scoped>
#Chart {
  width: 1000px;
  height: 500px;
  margin: auto;
  background-color: rgba(26, 26, 26, 0.582);
  position: relative;
}

.chartjs-render-monitor {
  transition: all 1s;
}

h1 {
  text-align: center;
}

ul {
  list-style-type: none;
}
</style>