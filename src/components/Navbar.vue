<template>
  <div id="Navbar">
    <p id="userDetails">{{userDetails.name}}</p>
    <PostDiscussions
      id="PostDiscs"
      v-if="userDetails && userDetails.access >= 3"
      :user="userDetails"
    />

    <span id="navLogout" a href="#" @click="logout">Logout</span>
  </div>
</template>

<script>
import PostDiscussions from "../components/PostDiscussions";

export default {
  name: "Navbar",
  props: {
    userDetails: Object,
    user: String,
    logout: Function,
    mine: Array
  },
  components: {
    PostDiscussions
  },
};
</script>

<style scoped>
#navLogout {
  position: relative;
  right: -47%;
  top: -1.35em;
  font-weight: 900;
  font-size: 20px;
  width: auto;
}

#navLogout:hover {
  cursor: pointer;
}

#userDetails {
  left: 1em;
  position: absolute;
  font-weight: 900;
  font-size: 25px;
  padding-left: 2px;
}
#Navbar {
  background: #4e5d6c;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.753);
  -moz-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.753);
  -webkit-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.74);
  width: 100%;
  height: 40px;
}
#PostDiscs {
  position: relative;
  margin-left: auto;
  margin-right: auto;

  top: 0.2em;
  font-weight: 900;
  font-size: 20px;
}
#PostDiscs:hover {
  cursor: pointer;
}
</style>