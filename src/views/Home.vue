<template>
  <div class="Home">
    <h1>Home (No user ? Login : Dashboard)</h1>
    <Login user="Hugo Boss"/>
    <Dashboard/>
  </div>
</template>

<script>
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

export default {
  name: "Home",
  components: {
    Login,
    Dashboard
  }
};
</script>




<style scoped>
</style>
