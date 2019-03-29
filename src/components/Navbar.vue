<template>
  <div id="Navbar">
    <b-navbar type="dark" variant="dark" class="navvy">
      <b-navbar-brand>
        <img :src="logo" alt="I am a fishy logo" class="logo">
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item v-if="userDetails && userDetails.access >= 3" v-b-modal.modal>Post discusssion</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item id="welcome" disabled>Welcome "{{ userDetails.name }}"</b-nav-item>
        <b-nav-item right @click="logout">Logout</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <PostDiscussions :user="userDetails"/>
  </div>
</template>

<script>
import PostDiscussions from "../components/PostDiscussions";
import logo from "../images/logo.png";
//    <p id="userDetails">{{userDetails.name}}</p>
//    <PostDiscussions
//      id="PostDiscs"
//      v-if="userDetails && userDetails.access >= 3"
//      :user="userDetails"
//    />
export default {
  name: "Navbar",
  props: {
    userDetails: Object,
    user: String,
    logout: Function
  },
  data() {
    return {
      logo: logo
    };
  },
  components: {
    PostDiscussions
  }
};
</script>

<style scoped>
.logo {
  max-width: 50px;
  max-height: 50px;
}

.navbar {
  height: 55px;
}

#welcome {
  color: white;
}

#Navbar {
  background: #4e5d6c;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.753);
  -moz-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.753);
  -webkit-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.74);
  width: 100%;
  height: 40px;
  font-weight: 900;
}
</style>