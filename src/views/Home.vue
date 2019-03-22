<template>
  <div class="Home">
    <h1>Home (No user ? Login : Dashboard)</h1>
    <Login user="Hugo Boss"/>
  </div>
</template>

<script>
import Login from "../components/Login";

export default {
  name: "Home",
  components: {
    Login
  }
};
</script>




<style scoped>
</style>
