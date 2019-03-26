<template>
  <div id="loginPage">
    <div class="form">
      <b-form id='topForm' @submit.prevent="login" v-if="show">
        <b-form-group
          id="email"
          label-for="Email"
          description="We'll never share your email with anyone else."
        >
          <label class="emailLabel">Email:</label>
          <b-form-input
            class="unique"
            v-model="form.email"
            type="text"
            name="email"
            placeholder="Enter your email..."
            required
          />
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
        <b-button id='signupButton' variant="warning"> <router-link to="/signup/" class='signupLink' >Sign Up</router-link> </b-button>

      </b-form>
      <!-- <h2>Third party</h2>
      <button>Guest?</button>-->
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
            // localStorage.setItem("userUID", JSON.stringify(cred.user.uid));
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
  color:white;
  /* background: #5cb85c; */
  /* display: block; */
  float:right;

  
}

#loginPage {
  
  padding-top: 1px;
  /* padding-bottom: 500px; */
  background: radial-gradient(transparent 50%, #0c4783), url("../images/bkg.jpg");

  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center; 
  /* background-image: -moz-radial-gradient(top, rgb(0, 0, 255) 0%, rgb(0,0,255) 100%); */
 

  
  height: 100vh;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;

  
}
/* .thing {
     background-image: radial-gradient( rgb(0, 243, 255), rgb(0,0,255));
     width: 100%;
     opacity: 0.4;

} */

.form {
  position: relative;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  margin: 0 0 0 0;
  border: 1px solid #d3fcff;
  /* padding: 0 10px 10px 30px; */
background-image: linear-gradient(#0c4783,rgb(142, 180, 230));  
margin-left: 35%;
margin-right: 35%;
/* padding:0; */
  margin-top: 18%;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  /* width: 50%; */
  align-items: center;
  z-index: 5;
  align-content:space-around;
/* justify-content:center; */



  /* padding: 0 15em; */
  box-shadow: inset 0 0 15px #fffbe5;
  -moz-box-shadow: inset 0 0 15px #ffe5e5;
  -webkit-box-shadow: inset 0 0 15px #ffe5e5;
}

.form h2 {
  margin-top: 2em;
}
.form input {
  /* width: 100%; */
  background: RGBA(255,255, 255, 0.7);
  width: 100%;
  padding: 12px 20px;
  /* margin: 8px 0; */
  box-sizing: border-box;
  border: 2px solid blue;
  border-radius: 4px;
  display: block;
  margin: 0;

}
.unique {
  margin:0;
}

#loginPage label {
  font-size: 1.2em;
  /* -webkit-text-stroke: 1px black;
  color: white;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000; */
}
.signupLink {
  color: white;
  
}
.btn {
    margin-right: 0;

}
#signupButton {
      right: 0;
      position:absolute;

}
#topForm {
  position: relative;
}
.loginPage {
  /* color: crimson; */
  font-weight: bolder;
  /* border: 5px solid crimson; */
}
button { 
  margin-right: 5em;
  margin-bottom: 1em;
  border: 0;
  border-radius: 10%;
}
.homeButton {
  margin:0;

}

.link {
  color:white
}

.link:hover {
text-decoration: none;
}
</style>