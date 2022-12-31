import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "mymoney-344d7.firebaseapp.com",
  projectId: "mymoney-344d7",
  storageBucket: "mymoney-344d7.appspot.com",
  messagingSenderId: "508134846030",
  appId: "1:508134846030:web:af824dda50ef68fff1dd1f",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
