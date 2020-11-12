import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const providers = {
    googleAuthProvider: new firebase.auth.GoogleAuthProvider(),
    githubAuthProvider: new firebase.auth.GithubAuthProvider(),
    twitterAuthProvider: new firebase.auth.TwitterAuthProvider()
}

export {
    firebase,
    providers,
    database as default
};