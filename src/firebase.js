import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6HJ2vF6o51dHkWN9Ko9CnrO2BsA1Od-E",
  authDomain: "disneyplus-clone-85f1a.firebaseapp.com",
  projectId: "disneyplus-clone-85f1a",
  storageBucket: "disneyplus-clone-85f1a.appspot.com",
  messagingSenderId: "137828694174",
  appId: "1:137828694174:web:a465f07dca169fe8d2a38f",
  measurementId: "G-S6XHJHHL3H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
