<template>
  <div id="loginPage">
    <img src="../images/logo.png" id="logo" alt="fishlogo">
    <div class="form">
      <b-form id="topForm" @submit.prevent="login" v-if="show">
        <b-form-group id="email" label-for="Email">
          <b-form-input
            class="unique"
            v-model="form.email"
            type="text"
            name="email"
            placeholder="Enter Your Email..."
            required
          />
        </b-form-group>
        <b-form-group id="Password" label-for="password">
          <b-form-input
            v-model="form.password"
            type="password"
            name="Password"
            class="unique"
            placeholder="Enter Your Password..."
            required
          />
        </b-form-group>

        <b-button id="loginButton" type="submit" variant="primary">Login</b-button>
        <router-link to="/signup/" class="signUpLink">Create New Account</router-link>
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
  margin: 0 0 0 0;
  margin-left: 35%;
  margin-right: 35%;
  margin-top: 7%;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  align-content: space-around;
  font-weight: 900;
  border: none;
}

.form input {
  padding-bottom: 1em;
  color: rgba(0, 0, 0, 1);
  background: RGBA(255, 255, 255);
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  font-weight: 900;
  border-radius: 1em;
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
#loginButton:hover {
  background: rgb(41, 211, 41);
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
  border-radius: 1em;
  width: 100%;
  font-weight: 900;
}
button:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px;
  background: #5bc0de;
  color: #ffffff !important;
  font-weight: 700 !important;
  -webkit-box-shadow: 0px 5px 20px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.3s ease 0s;
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
.signUpLink {
  text-align: center;
  color: white;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: block;
  margin-top: 1em;
}

#email,
#Password {
  margin-bottom: 2em;
}

#logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  top: 9em;
  position: relative;
  width: 16%;
}
</style>