<template>
  <div class="Signup">
    <h1 class="SignupHeader">Signup</h1>
    <form class="SignupForm" @submit.prevent="signup">
      <label for="email">Email:</label>
      <input v-model="email" type="text" name="email" placeholder="you@email.com">
      <label for="employeeId">Employee ID:</label>
      <input v-model="employeeId" type="text" name="employeeId">
      <label for="name">Name:</label>
      <input v-model="name" type="text" name="name">
      <label for="access">Access:</label>
      <input v-model="access" type="text" name="access">
      <label for="department">Department:</label>
      <input v-model="department" type="text" name="department">
      <label for="password">Password:</label>
      <input v-model="password" type="password" name="password">
      <label for="confirm_password">Confirm Password:</label>
      <input v-model="confirm_password" type="password" name="confirm_password">
      <p>{{ feedback }}</p>
      <button class="SignupButton">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { db } from "@/utils/config";
import firebase from "firebase";

export default {
  name: "Signup",

  data() {
    return {
      email: null,
      feedback: null,
      employeeId: null,
      name: null,
      access: null,
      department: null,
      password: null,
      confirm_password: null
    };
  },
  updated() {
    console.log(db);
  },

  methods: {
    signup() {
      if (
        this.email &&
        this.employeeId &&
        this.name &&
        this.access &&
        this.department &&
        this.password &&
        this.confirm_password === this.password
      ) {
        let ref = db.collection("Users").doc(this.employeeId);
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            ref
              .set({
                name: this.name,
                access: this.access,
                department: this.department,
                user_id: cred.user.uid
              })
              .then(() => {
                this.$router.push({ name: "Dashboard" });
              });
          })
          .catch(err => {
            console.log(err);
            this.feedback = err.message;
          });
      } else if (this.confirm_password !== this.password) {
        this.feedback = "Password does not match";
      } else {
        this.feedback = "Required Fields missing";
      }
    }
  }
};
</script>

<style scoped>
.SignupHeader {
  text-align: center;
  margin-bottom: 1.5em;
}
.SignupForm {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.SignupForm label,
.SignupForm input {
  margin: 0.2em 0;
  height: 1.5em;
  width: 20em;
}

.SignupButton {
  margin-top: 4em;
  height: 2em;
  width: 20.3em;
}
</style>
