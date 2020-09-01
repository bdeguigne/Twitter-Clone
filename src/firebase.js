import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjjBE4plHC4ksD6cdeClI-gdIYAP86WHc",
  authDomain: "twitter-clone-bfe24.firebaseapp.com",
  databaseURL: "https://twitter-clone-bfe24.firebaseio.com",
  projectId: "twitter-clone-bfe24",
  storageBucket: "twitter-clone-bfe24.appspot.com",
  messagingSenderId: "592208935292",
  appId: "1:592208935292:web:6c9477a5ae4bab9d964cf9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

