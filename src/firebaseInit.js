import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyB7sZ7r-NxIk1fYo-GhJ0MckmMCxExbIXo",
  authDomain: "vue-emp-manager-9911c.firebaseapp.com",
  databaseURL: "https://vue-emp-manager-9911c.firebaseio.com",
  projectId: "vue-emp-manager-9911c",
  storageBucket: "vue-emp-manager-9911c.appspot.com",
  messagingSenderId: "83600350236",
  appId: "1:83600350236:web:9dbf486519266f53b493d9",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
