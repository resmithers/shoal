<template>
  <div class="Home">
    <h1>Home (No user ? Login : Dashboard)</h1>
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
