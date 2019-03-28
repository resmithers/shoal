<template>
  <div>
    <div v-if="chartKey > 0" id="Chart">
      <chartjs-line
        :datalabel="'Votes'"
        :labels="labels"
        :data="data"
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
      data: null,
      labels: null,
      chartKey: 0,
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
    votes: Object
  },
  watch: {
    votes: function() {
      let labels = [];
      let data = [];

      function getUnique(arr, comp) {
        return arr
          .map(e => e[comp])
          .map((e, i, final) => final.lastIndexOf(e) === i && i)
          .filter(e => arr[e])
          .map(e => arr[e]);
      }

      const voter = getUnique(this.votes, "Author");

      voter.forEach(v => {
        labels.push(v.label);
        data.push(v.value);
      });
      this.labels = labels;
      this.data = data;
      this.chartKey++;
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