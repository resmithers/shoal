<template>
  <div class="Home">
    <Login :setUser="this.setUser" :user="this.user"/>
  </div>
</template>

<script>
import Login from "../components/Login";

export default {
  name: "Home",
  components: {
    Login
  },
  props: {
    user: String,
    setUser: Function
  }
};
</script>




<style scoped>
</style>
