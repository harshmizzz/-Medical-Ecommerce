import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC2PbVERaYSfJBwJaDWAUvVQbLeHb028mQ",
    authDomain: "medico-265cb.firebaseapp.com",
    projectId: "medico-265cb",
    storageBucket: "medico-265cb.appspot.com",
    messagingSenderId: "226307883766",
    appId: "1:226307883766:web:389257bf787a3a04c0e2d7"
});

const auth = firebase.auth();

export { auth };
