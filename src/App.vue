<template>
  <div id="app">
    <router-view :setUser="this.setUser" :user="this.user"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: null
    };
  },
  methods: {
    setUser: function(newUser) {
      this.user = newUser;
    }
  }
};
</script>
<style>
</style>
