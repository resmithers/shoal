
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
      const arr = [0];
      this.points.forEach((p, i) => {
        arr.push(i + 1);
      });
      arr.push(arr.length);
      this.marks = arr;
      console.dir(this.marks);
      this.min = 0;
      this.max = arr.length - 1;
    }
  }
};
</script>

<style scoped>
</style>
