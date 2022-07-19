import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyA3FKvLH_SJY6gQFebDO-d2dfiwHq-_mtg",
    authDomain: "expense-tracker-31f2f.firebaseapp.com",
    projectId: "expense-tracker-31f2f",
    storageBucket: "expense-tracker-31f2f.appspot.com",
    messagingSenderId: "550054063675",
    appId: "1:550054063675:web:d2d4a5d4fc34e6e2baf61e",
    measurementId: "G-CG14NVRWVD"
}

const fire = firebase.initializeApp(config);

export default fire;