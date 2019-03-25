<template>
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
      :pointborderwidth="2"
      :pointbordercolor="'blue'"
      :pointhoverborderwidth="3"
      :pointhoverbackgroundcolor="'#636b6f'"
      :pointhoverbordercolor="'#ffd663'"
      :responsive="true"
      id="chart"
    ></chartjs-line>
    <Votes :total="this.datasets.length" :up="this.upVotes" :down="this.downVotes"></Votes>
  </div>
</template>

<script>
import { listenVotes } from "../utils/FirestoreListen.js";
import Votes from "../components/Votes";

export default {
  data() {
    return {
      chartKey: 0,
      labels: [],
      datasets: [],
      discID: this.$route.params.id,
      upVotes: 0,
      downVotes: 0,
      option: {
        title: {
          postition: "bottom"
        },
        animation: {
          duration: 1
        }
      }
    };
  },
  mounted() {
    listenVotes(this);
  },
  watch: {
    datasets: function() {
      this.chartKey++;
      this.countVotes();
    }
  },
  methods: {
    countVotes: function() {
      this.upVotes = 0;
      this.downVotes = 0;

      if (this.datasets[0] === 1) this.upVotes++;
      if (this.datasets[0] === -1) this.downVotes++;

      for (let i = 1; i < this.datasets.length; i++) {
        this.datasets[i] < this.datasets[i - 1]
          ? this.downVotes++
          : this.upVotes++;
      }
    }
  },
  components: {
    Votes
  }
};
</script>

<style scoped>
#Chart {
  width: 1000px;
  height: 500px;
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