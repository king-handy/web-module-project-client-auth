import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5pfwkKX5uXSf9sG1GTVZMEeczTpX9yug",
  authDomain: "client-auth-33390.firebaseapp.com",
  projectId: "client-auth-33390",
  storageBucket: "client-auth-33390.appspot.com",
  messagingSenderId: "938129539300",
  appId: "1:938129539300:web:b9ebe55fee814a7b9c6cf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signIn = () => {
    signInWithPopup(auth, provider).then(res => {
        localStorage.setItem('token', `Bearer ${res.user.accessToken}`)
        // console.log(res.user.accessToken);
    })
}
