<template>
  <div>
    <figure>
      <img
        alt="Shoal logo"
        src="https://paterry.files.wordpress.com/2013/01/istock_000010547689_medium.jpg"
      >
      <figcaption>Shoal</figcaption>
    </figure>
    <h2>Better together</h2>
    <form @submit.prevent="login">
      <span class="inline">
        <input
          v-model="email"
          type="text"
          name="email"
          class="unique"
          placeholder="Enter your email..."
          required
        >
        <input
          v-model="password"
          type="password"
          name="Password"
          class="unique"
          placeholder="   Enter your password..."
          required
        >
        <p v-if="feedback">{{feedback}}</p>
      </span>
      <button>Login</button>
    </form>
    <h2>Third party</h2>
    <button>Guest?</button>
    <router-link to="/signup/">Sign Up</router-link>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  props: {
    user: String
  },
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user);
            this.$router.push({ name: "discussions", params: { id: "1" } });
          })
          .catch(error => {
            this.feedback = "There is no user existing with these credentials";
          });
        this.feedback = null;
      } else {
        this.feedback = "Please fill in both fields";
      }
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Login {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
}

button {
  max-width: 30%;
  min-width: 180px;
  background: rgb(212, 240, 250);
  border: 1px solid black;
  height: 35px;
  font-weight: bold;
  font-size: 20px;
  margin: 10px 10px 200px 10px;
}

input {
  max-width: 60%;
  min-width: 250px;
  margin-bottom: 20px;
  border: 1px solid black;
  height: 32px;
  margin: 10px;
}

figure {
  position: relative;
  text-align: center;
  color: white;
}

figcaption {
  position: absolute;
  top: 80%;
  left: 30%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  transition: top 1s;
}
@media only screen and (max-width: 400px) {
  figcaption {
    top: 20%;
    transition: top 1s;
  }
}

img {
  height: 20vh;
  border-radius: 50% 50% 50% 0%;
  transition: height 1s;
  transition: border-radius 1s;
}

@media only screen and (max-width: 400px) {
  img {
    height: 15vh;
    border-radius: 0% 50% 50% 50%;
    transition: height 1s;
    transition: border-radius 1s;
  }
}
</style>
