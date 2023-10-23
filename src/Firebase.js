import firebase from './Firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDQdwv1rBIU-SagV4WNcbFbX9fXJNjJjMw",
    authDomain: "disneyplus-clone-925ce.firebaseapp.com",
    projectId: "disneyplus-clone-925ce",
    storageBucket: "disneyplus-clone-925ce.appspot.com",
    messagingSenderId: "398242303586",
    appId: "1:398242303586:web:ac0b6ad2eb781430728b3b"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;