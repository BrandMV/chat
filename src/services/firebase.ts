import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore"

// const {REACT_APP_APIKEY, REACT_APP_AUTHDOMAIN, REACT_APP_PROJECTID, REACT_APP_STORAGEBUCKET, REACT_APP_MESSAGINGSENDERID, REACT_APP_APPID} = process.env

firebase.initializeApp({
    apiKey: "AIzaSyBQMmlZidQl8gZDCCTWOrj6ko6WrT5Nx-Y",
    authDomain: "react-chat-ts-97131.firebaseapp.com",
    projectId: "react-chat-ts-97131",
    storageBucket: "react-chat-ts-97131.appspot.com",
    messagingSenderId: "135441841794",
    appId: "1:135441841794:web:f05eeb2bf45f9819617e9b"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider(); //para autentiucar con google

export { auth, firestore, googleProvider, firebase }