<template>
  <div id="Votes">
    <vue-slider
      v-if="max"
      v-model="value"
      :enable-cross="false"
      :marks="marks"
      :min="min"
      :max="max"
      @change="slideOn"
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
  props: {
    points: Array
  },
  data: function() {
    return {
      value: [null, null],
      marks: null,
      min: null,
      max: null
    };
  },
  watch: {
    points: function() {
      const arr = [];
      this.points.forEach((p, i) => {
        arr.push(i);
      });
      this.min = 0;
      this.max = arr.length - 1;
      this.$nextTick(() => {
        this.marks = arr;
        this.value = [0, arr.length - 1];
      });
    }
  },
  methods: {
    moment: function(param) {
      return moment(param);
    },
    slideOn: function() {
      this.$emit("slide", this.value, this.max);
    }
  }
};
</script>

<style scoped>

#Votes {
  background-color: rgba(48, 47, 47, 0.658)
}

</style>
