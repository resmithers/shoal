<template>
  <div id="app">
    <router-view :setUser="this.setUser" :user="this.user" :userDetails="this.userDetails" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: null,
      userDetails: null
    };
  },
  methods: {
    setUser: function(newUser, userDeets) {
      this.user = newUser;
      this.userDetails = userDeets;
    }
  },
  mounted () {


  },
  watch: {
    user: function() {console.log(this.user)}
  }
};
</script>
<style>
</style>
