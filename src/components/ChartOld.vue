<template>
  <div>
    <div id="Chart" v-if="chartKey">
      <chartjs-line
        :datalabel="'Votes'"
        :labels="votes.labels"
        :data="votes.total"
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
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartKey: null,
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
  props: {
    discussion: Object,
    votes: Object
  },
  watch: {
    votes: function() {
      this.chartKey = 1;
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
  }
};
</script>

<style scoped>
#Chart {
  width: 1000px;
  height: 500px;
  margin: auto;
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