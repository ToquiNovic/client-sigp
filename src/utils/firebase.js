// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChqF0zUXSbCe2obcE2gJBN5S1jRkO3YlI",
  authDomain: "sig-archives-dc939.firebaseapp.com",
  projectId: "sig-archives-dc939",
  storageBucket: "sig-archives-dc939.appspot.com",
  messagingSenderId: "210079584789",
  appId: "1:210079584789:web:cd74b75ae4ef387ae4f41c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;