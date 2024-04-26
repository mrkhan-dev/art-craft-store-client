// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCND7v2zEGcu_pB8x2YV_ErHIoKo5xf-5w",
  authDomain: "art-and-craft-dc812.firebaseapp.com",
  projectId: "art-and-craft-dc812",
  storageBucket: "art-and-craft-dc812.appspot.com",
  messagingSenderId: "73674528983",
  appId: "1:73674528983:web:a0847bd1636d5536663892",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
