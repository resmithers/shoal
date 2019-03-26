
<template>
<div id="signupPage">
    <div class="form">
      <b-form @submit.prevent="signup" @reset.prevent="onReset" v-if="show">
        <b-form-group id="email" label-for="Email">
          <label class="emailLabel">Email:</label>

          <b-form-input
            class="unique"
            v-model="form.email"
            type="text"
            name="email"
            placeholder="you@email.com"
            required
          />
        </b-form-group>
        <label class="employeeIdLabel">Employee ID:</label>
        <b-form-group id="employeeId" label-for="employeeId">
          <b-form-input
            v-model="form.employeeId"
            type="text"
            name="employeeId"
            class="unique"
            required
          />
        </b-form-group>
        <p v-if="feedback">{{feedback}}</p>

        <label class="nameLabel">Name:</label>
        <b-form-group id="name" label-for="name">
          <b-form-input v-model="form.name" type="text" name="name" class="unique" required/>
        </b-form-group>

        <label class="accessLabel">Access:</label>
        <b-form-group id="access" label-for="accessLabel">
          <b-form-input v-model="form.access" type="text" name="access" class="unique" required/>
        </b-form-group>

        <label class="departmentLabel">Department:</label>
        <b-form-group id="department" label-for="department">
          <b-form-input
            v-model="form.department"
            type="text"
            name="department"
            class="unique"
            required
          />
        </b-form-group>

        <label class="passwordLabel">Password:</label>
        <b-form-group id="password" label-for="passwordLabel">
          <b-form-input
            v-model="form.password"
            type="text"
            name="password"
            class="unique"
            required
          />
        </b-form-group>

        <label class="confirm_passwordLabel">Confirm Password:</label>
        <b-form-group id="confirm_password" label-for="confirm_password">
          <b-form-input
            v-model="form.confirm_password"
            type="text"
            name="confirm_password"
            class="unique"
            required
          />
        </b-form-group>

        <p v-if="feedback">{{feedback}}</p>
        <b-button type="submit" variant="primary">Create</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
              <b-button  class='homeButton' variant="success"><router-link to="/" class='link'>Home</router-link></b-button>

      </b-form>

    </div>
  </div>
</template>

<script>
import { db } from "@/utils/config";
import firebase from "firebase";

export default {
  name: "Signup",

data() {
    return {
      form: {
        email: null,
        feedback: null,
        employeeId: null,
        name: null,
        access: null,
        department: null,
        password: null,
        confirm_password: null
      },
      show: true
    };
  },
  props: {
    setUser: Function
  },
  methods: {
    signup() {
      if (
        this.form.email &&
        this.form.name &&
        this.form.access &&
        this.form.department &&
        this.form.password &&
        this.form.confirm_password === this.form.password
      ) {
        let ref = db.collection("Users");
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(({ user }) => {
            const { uid } = user;
            Promise.all([
              ref.doc(uid).set({
                name: this.form.name,
                access: +this.form.access,
                department: this.form.department,
                user_id: uid
              }),
              uid
            ]).then(a => {
              this.setUser(a[1]);
              this.$router.push({ name: "Dashboard" });
            });
          })
          .catch(err => {
            console.log(err);
            this.feedback = err.message;
          });
      } else if (this.form.confirm_password !== this.form.password) {
        this.form.feedback = "Password does not match";
      } else {
        this.form.feedback = "Required Fields missing";
      }
    },
    onReset(evt) {
      /* Reset our form values */
      this.form.email = null;
      (this.form.feedback = null), (this.form.employeeId = null);
      this.form.name = null;
      this.form.access = null;
      this.form.department = null;
      this.form.password = null;
      this.form.confirm_password = null;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
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

#signupPage {
  padding-top: 1px;
  padding-bottom: 500px;
  background: url("../images/bkg.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  height: 100vh;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

.form {
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  margin: 0 0 10px 0;
  border: 1px solid #d3fcff;
  /* padding: 0 10px 10px 30px; */
background-image: linear-gradient(#0c4783,rgb(142, 180, 230));  
margin-left: 35%;
margin-right: 35%;
/* padding:0; */
  margin-top: 3em;
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

#signupPage label {
  font-size: 1.2em;
  /* -webkit-text-stroke: 1px black;
  color: white;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000; */
}

.signupPage {
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
