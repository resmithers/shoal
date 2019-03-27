
<template>
  <div id="Votes">
    <vue-slider
      v-on:change="slideOn"
      v-model="value"
      :enable-cross="false"
      :marks="marks"
      :min="min"
      :max="max"
    ></vue-slider>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import moment from "moment";

export default {
  components: {
    VueSlider
  },
  data: function() {
    return {
      value: [1, 2],
      marks: [],
      min: 0,
      max: 1
    };
  },
  props: {
    points: Array
  },
  methods: {
    moment: function(param) {
      return moment(param);
    },
    slideOn: function() {
      this.$emit("slide", this.value);
    }
  },
  watch: {
    points: function() {
      const arr = [];
      const lookArr = [];
      this.points.forEach((p, i) => {
        lookArr.push(p);
        arr.push(i);
      });
      this.marks = arr;
      this.min = 0;
      this.max = arr.length - 1;
    }
  }
};
</script>

<style scoped>
</style>
