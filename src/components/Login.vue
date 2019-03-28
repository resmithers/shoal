<template>
  <div id="loginPage">
    <div class="form">
      <b-form id="topForm" @submit.prevent="login" v-if="show">
        <b-form-group id="email" label-for="Email">
          <label class="emailLabel">Email:</label>
          <b-form-input
            class="unique"
            v-model="form.email"
            type="text"
            name="email"
            placeholder="Enter your email..."
            required
          />
          <p class="description">We'll never share your email with anyone else.</p>
        </b-form-group>
        <label class="passwordLabel">Password:</label>
        <b-form-group id="Password" label-for="password">
          <b-form-input
            v-model="form.password"
            type="password"
            name="Password"
            class="unique"
            placeholder="   Enter your password..."
            required
          />
        </b-form-group>

        <b-button type="submit" variant="primary">Login</b-button>
        <b-button id="signupButton" variant="warning">
          <router-link to="/signup/" class="signupLink">Sign Up</router-link>
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  props: {
    user: String,
    setUser: Function
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      show: true
    };
  },
  mounted() {
    if (this.user || localStorage.getItem("userUID")) {
      this.$router.push({ name: "Dashboard" });
    }
  },
  methods: {
    login() {
      if (this.form.email && this.form.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(cred => {
            this.$router.push({ name: "Dashboard" });
            this.setUser(cred.user.uid);
            localStorage.setItem("userUID", JSON.stringify(cred.user.uid));
          })
          .catch(() => {
            this.form.feedback =
              "There is no user existing with these credentials";
          });
        this.form.feedback = null;
      } else {
        this.form.feedback = "Please fill in both fields";
      }
    }
  }
};
</script>

<style scoped>
.homeButton {
  color: white;

  float: right;
}

#loginPage {
  padding-top: 1px;
  background: radial-gradient(transparent 50%, #0c4783),
    url("../images/shore.png");

  background-repeat: no-repeat;
  background-size: 100%;
  background-position: cover;

  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.description {
  margin-top: 0.5em;
  opacity: 0.6;
}

.form {
  position: relative;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  margin: 0 0 0 0;
  border: 1px solid #d3fcff;
  background-image: linear-gradient(#0c4783, rgb(142, 180, 230));
  margin-left: 35%;
  margin-right: 35%;
  margin-top: 18%;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  align-content: space-around;

  box-shadow: inset 0 0 15px #fffbe5;
  -moz-box-shadow: inset 0 0 15px #ffe5e5;
  -webkit-box-shadow: inset 0 0 15px #ffe5e5;
}

.form h2 {
  margin-top: 2em;
}
.form input {
  color: rgba(0, 0, 0, 1);

  background: RGBA(255, 255, 255, 0.7);
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid blue;
  border-radius: 4px;
  display: block;
  margin: 0;
}
.unique {
  margin: 0;
}

#loginPage label {
  font-size: 1.2em;
}
.signupLink {
  color: white;
  text-decoration: none;
}
.btn {
  margin-right: 0;
}
#signupButton {
  right: 0;
  position: absolute;
}
#topForm {
  position: relative;
}
.loginPage {
  font-weight: bolder;
}
button {
  margin-right: 5em;
  margin-bottom: 1em;
  border: 0;
  border-radius: 10%;
}
.homeButton {
  margin: 0;
}

.link {
  color: white;
}

.link:hover {
  text-decoration: none;
}
</style>