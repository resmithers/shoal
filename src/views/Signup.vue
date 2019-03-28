
<template>
  <div id="signupPage">
    <div class="form">
      <b-form @submit.prevent="signup" @reset.prevent="onReset" v-if="show">
        <b-form-group id="email" label-for="Email">
          <b-form-input
            class="unique"
            v-model="form.email"
            type="text"
            name="email"
            placeholder="Work Email..."
            required
          />
        </b-form-group>
        <b-form-group id="employeeId" label-for="employeeId">
          <b-form-input
            v-model="form.employeeId"
            type="text"
            name="employeeId"
            class="unique"
            required
            placeholder="Employee ID..."
          />
        </b-form-group>
        <p v-if="feedback">{{feedback}}</p>
        <b-form-group id="name" label-for="name">
          <b-form-input v-model="form.name" type="text" name="name" class="unique" required placeholder="First And Last Name..."/>
        </b-form-group>
        <b-form-group id="access" label-for="accessLabel">
          <b-form-input v-model="form.access" type="number" name="access" class="unique" required placeholder="Access Level..."/>
        </b-form-group>
        <b-form-group id="department" label-for="department">
          <b-form-input
            v-model="form.department"
            type="text"
            name="department"
            class="unique"
            required
            placeholder="Department Name..."
          />
        </b-form-group>
        <b-form-group id="password" label-for="passwordLabel">
          <b-form-input
            v-model="form.password"
            type="password"
            name="password"
            class="unique"
            required
            placeholder="Password.."
          />
        </b-form-group>
        <b-form-group id="confirm_password" label-for="confirm_password">
          <b-form-input
            v-model="form.confirm_password"
            type="password"
            name="confirm_password"
            class="unique"
            required
            placeholder="Confirm Password..."
          />
        </b-form-group>

        <p v-if="feedback">{{feedback}}</p>
        <b-button type="submit" variant="primary">Create</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button class="homeButton" variant="success">
          <router-link to="/" class="link">Home</router-link>
        </b-button>
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
  color: white;

  float: right;
}

#signupPage {
  padding-top: 1px;
  padding-bottom: 500px;
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

.form {
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  margin: 0 0 10px 0;
  font-weight: 900;
  margin-left: 35%;
  margin-right: 35%;
  margin-top: 9em;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  align-content: space-around;
}

.form input {
   padding-bottom: 2em;
  color: rgba(0, 0, 0, 1);
  background: RGBA(255, 255, 255);
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  font-weight: 900;
  border-radius: 1em;
  display: block;
  margin-bottom: 2em;
}
.unique {
  margin: 0;
}

#signupPage label {
  font-size: 1.2em;
}

.signupPage {
  font-weight: bolder;
}
button {
  margin-right: 5em;
  margin-bottom: 1em;
  border: 0;
  border-radius: 1em;
  font-weight: 900;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px;
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
</style>
