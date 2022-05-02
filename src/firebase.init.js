// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhlq5sUsMxSvYtISYRqmWW0L2PEyr7QDI",
  authDomain: "laptop-services-3115e.firebaseapp.com",
  projectId: "laptop-services-3115e",
  storageBucket: "laptop-services-3115e.appspot.com",
  messagingSenderId: "216388718013",
  appId: "1:216388718013:web:5ae3572acd7502392256d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;