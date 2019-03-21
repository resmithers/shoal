import firebase from "firebase";
import firestore from "firebase/firestore";

var config = {
  apiKey: "AIzaSyD8XkX8kyDSmxp0791fdsqCioja1eUI1R8",
  authDomain: "shoal-c617b.firebaseapp.com",
  databaseURL: "https://shoal-c617b.firebaseio.com",
  projectId: "shoal-c617b",
  storageBucket: "shoal-c617b.appspot.com",
  messagingSenderId: "169349571126"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
