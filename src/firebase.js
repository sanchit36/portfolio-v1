import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBos_0GrMSuR0d4QiIaTAQQgxNcRSYZekg",
  authDomain: "portfolio-db-31fdd.firebaseapp.com",
  projectId: "portfolio-db-31fdd",
  storageBucket: "portfolio-db-31fdd.appspot.com",
  messagingSenderId: "389171109803",
  appId: "1:389171109803:web:3320f70aa3395526f47cee",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
