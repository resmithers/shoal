<template>
  <div id="Navbar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">{{userDetails.name}}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-nav>
        <b-nav-item href="#">My Discussions</b-nav-item>
        <b-nav-item href="#">Post Discussion</b-nav-item>
        <b-nav-item id="navLogout" right @click="logout">Logout</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: { userDetails: Object, user: String, logout: Function }
};
</script>

<style scoped>
#navLogout {
  position: absolute;
  right: 0;
}
</style>