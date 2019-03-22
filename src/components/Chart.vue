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
  </div>
</template>

<script>
import { listenVotes } from "../utils/FirestoreListen.js";

export default {
  data() {
    return {
      chartKey: 0,
      labels: [],
      datasets: [],
      discID: this.$route.params.id,
      option: {
        title: {
          postition: "bottom"
        },
        animation: {
          duration: 0
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
    }
  },
  methods: {}
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
</style>